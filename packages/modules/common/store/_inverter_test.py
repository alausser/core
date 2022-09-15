# bad integration test

from typing import List, NamedTuple
from unittest.mock import Mock

import pytest


from control import data
from control.bat import Bat
from control.counter import CounterAll
from modules.common.component_state import InverterState
from modules.common.store._inverter import PurgeInverterState


@pytest.fixture(autouse=True)
def mock_data() -> None:
    data.data_init(Mock())
    data.data.counter_data["all"] = CounterAll()
    data.data.counter_data["all"].data.update({"get": {"hierarchy": []}})


STANDARD_HIERARCHY = [{"id": 0, "type": "counter",
                       "children": [{"id": 3, "type": "cp", "children": []}]},
                      {"id": 1, "type": "inverter", "children": []},
                      {"id": 2, "type": "bat", "children": []}]


HYBRID_HIERARCHY = [{"id": 0, "type": "counter",
                     "children": [{"id": 3, "type": "cp", "children": []}]},
                    {"id": 1, "type": "inverter",
                     "children": [{"id": 2, "type": "bat", "children": []}]}]


Params = NamedTuple("Params", [("name", str), ("hierarchy", List), ("expected_state", InverterState)])
cases = [
    Params("standard", STANDARD_HIERARCHY, InverterState(power=-5786, exported=200)),
    Params("hybrid", HYBRID_HIERARCHY, InverterState(power=-6009, exported=0))
]


@ pytest.mark.parametrize("params", cases, ids=[c.name for c in cases])
def test_fix_hybrid_values(params):
    # setup
    data.data.counter_data["all"].data["get"]["hierarchy"] = params.hierarchy
    data.data.bat_data["bat2"] = Mock(spec=Bat, data={"get": {"power": 223, "exported": 200, "imported": 100}})
    purge = PurgeInverterState(delegate=Mock(delegate=Mock(num=1)))

    # execution
    state = purge.fix_hybrid_values(InverterState(power=-5786, exported=200))

    # evaluation
    assert vars(state) == vars(params.expected_state)
