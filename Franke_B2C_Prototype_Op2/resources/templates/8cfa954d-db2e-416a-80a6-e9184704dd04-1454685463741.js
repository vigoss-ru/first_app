jQuery("#simulation")
  .on("click", ".t-8cfa954d-db2e-416a-80a6-e9184704dd04 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Label_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c31b8ba0-2e52-4516-9df9-1e08e6ab5c5e"
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
    } else if(jFirer.is("#t-Label_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/dcf97696-fc7a-4e52-afda-be1b12dab0e2"
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
    } else if(jFirer.is("#t-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#t-Panel_3"
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
    } else if(jFirer.is("#t-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "searchArtName",
                    "value": {
                      "datatype": "property",
                      "target": "#t-Input_6",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c31b8ba0-2e52-4516-9df9-1e08e6ab5c5e"
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
  .on("keyup.jim", ".t-8cfa954d-db2e-416a-80a6-e9184704dd04 .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "searchArtName",
                    "value": {
                      "datatype": "property",
                      "target": "#t-Input_6",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c31b8ba0-2e52-4516-9df9-1e08e6ab5c5e"
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
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("mouseenter dragenter", ".t-8cfa954d-db2e-416a-80a6-e9184704dd04 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Label_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Label_3": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "OpenSans-Bold,Arial"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Label_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Label_3 span": {
                      "attributes": {
                        "color": "#DC281E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "OpenSans-Bold,Arial",
                        "font-size": "9.0pt"
                      }
                    }
                  } ],
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Label_4": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "OpenSans-Bold,Arial"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Label_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Label_4 span": {
                      "attributes": {
                        "color": "#DC281E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "OpenSans-Bold,Arial",
                        "font-size": "9.0pt"
                      }
                    }
                  } ],
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Label_5": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "OpenSans-Bold,Arial"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Label_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Label_5 span": {
                      "attributes": {
                        "color": "#DC281E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "OpenSans-Bold,Arial",
                        "font-size": "9.0pt"
                      }
                    }
                  } ],
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Label_9": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "OpenSans-Bold,Arial"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Label_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Label_9 span": {
                      "attributes": {
                        "color": "#DC281E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "OpenSans-Bold,Arial",
                        "font-size": "9.0pt"
                      }
                    }
                  } ],
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Panel_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Line_1": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Line_1": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Line_1": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Ellipse_1 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "13px",
                        "height": "13px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Ellipse_1 .content": {
                      "attributes": {
                        "width": "13px",
                        "height": "13px"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Ellipse_1": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Ellipse_1": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Ellipse_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Ellipse_1 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "13px",
                        "height": "13px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Ellipse_1 .content": {
                      "attributes": {
                        "width": "13px",
                        "height": "13px"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Ellipse_1": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Ellipse_1": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Line_1": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Line_1": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Line_1": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Line_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Line_1": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Line_1": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Line_1": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Ellipse_1 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "13px",
                        "height": "13px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Ellipse_1 .content": {
                      "attributes": {
                        "width": "13px",
                        "height": "13px"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Ellipse_1": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#t-8cfa954d-db2e-416a-80a6-e9184704dd04 #t-Ellipse_1": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
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
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".t-8cfa954d-db2e-416a-80a6-e9184704dd04 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Label_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Panel_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Ellipse_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Line_1")) {
      jEvent.undoCases(jFirer);
    }
  });