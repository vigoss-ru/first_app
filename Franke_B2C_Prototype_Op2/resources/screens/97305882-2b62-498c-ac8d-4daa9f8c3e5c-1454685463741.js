jQuery("#simulation")
  .on("click", ".s-97305882-2b62-498c-ac8d-4daa9f8c3e5c .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_1",
                    "width": {
                      "type": "exprvalue",
                      "value": "878"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "711"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Image_1",
                    "top": {
                      "type": "movebyoffset",
                      "value": "-100"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "-200"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
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
  })
  .on("drag", ".s-97305882-2b62-498c-ac8d-4daa9f8c3e5c .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Image_1",
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimMinus",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Image_1",
                            "property": "jimGetAbsolutePositionY"
                          },{
                            "action": "jimCursorY"
                          } ]
                        },"50" ]
                      }
                    },
                    "left": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimMinus",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Image_1",
                            "property": "jimGetAbsolutePositionX"
                          },{
                            "action": "jimCursorX"
                          } ]
                        },"200" ]
                      }
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Image_1",
                    "top": {
                      "type": "movewithcursor",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimCursorY"
                        },"100" ]
                      }
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimCursorX"
                        },"100" ]
                      }
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": "#s-Image_1",
                    "parent": "#s-Panel_1"
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
  })
  .on("dragend", ".s-97305882-2b62-498c-ac8d-4daa9f8c3e5c .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-97305882-2b62-498c-ac8d-4daa9f8c3e5c .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  });