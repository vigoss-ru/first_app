jQuery("#simulation")
  .on("click", ".t-019671fb-bd29-4e35-883d-c2ba70cc6246 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "typeOfCheckout"
                  },"login" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "typeOfCheckout"
                  },"register" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7b555f66-68ed-4142-bc52-39404940f1ef"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });