#!/bin/bash

OPENWBBASEDIR=$(cd "$(dirname $0)/../../" && pwd)
RAMDISKDIR="${OPENWBBASEDIR}/ramdisk"
MODULEDIR=$(cd "$(dirname $0)" && pwd)
#DMOD="BATT"
DMOD="MAIN"

if [ ${DMOD} == "MAIN" ]; then
    MYLOGFILE="${RAMDISKDIR}/openWB.log"
else
    MYLOGFILE="${RAMDISKDIR}/speicher.log"
fi

python3 "${MODULEDIR}/sonneneco.py" "${sonnenecoip}" "${sonnenecoalternativ}" >>$MYLOGFILE 2>&1

speicherleistung=$(<${RAMDISKDIR}/speicherleistung)
openwbDebugLog ${DMOD} 1 "BattLeistung: ${speicherleistung}"
