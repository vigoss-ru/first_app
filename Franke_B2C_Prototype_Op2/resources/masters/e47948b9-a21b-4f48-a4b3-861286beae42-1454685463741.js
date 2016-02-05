jQuery("#simulation")
  .on("click", ".m-e47948b9-a21b-4f48-a4b3-861286beae42 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-e47948b9-Label_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#m-e47948b9-login_popup"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/41a6dd46-6a5b-4c04-bf30-c05df8752763"
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
    } else if(jFirer.is("#m-e47948b9-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#m-e47948b9-login_popup"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6ae8323f-d65b-45d6-b7fa-cb3f2b4a2b46"
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
    } else if(jFirer.is("#m-e47948b9-Panel_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6ae8323f-d65b-45d6-b7fa-cb3f2b4a2b46"
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
  .on("pageload", ".m-e47948b9-a21b-4f48-a4b3-861286beae42 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-e47948b9-a21b-4f48-a4b3-861286beae42")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "loggedIn"
                },"true" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-e47948b9-Panel_8"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-e47948b9-Input_1",
                    "value": {
                      "datatype": "variable",
                      "element": "nameComplete"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-e47948b9-Panel_6"
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
  .on("mouseenter dragenter", ".m-e47948b9-a21b-4f48-a4b3-861286beae42 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#m-e47948b9-Panel_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "loggedIn"
                },"false" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-e47948b9-login_popup"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-e47948b9-Panel_7"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-e47948b9-login_popup"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-e47948b9-Panel_9"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-e47948b9-Button_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Button_8": {
                      "attributes": {
                        "background-color": "#9E1E14",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Button_8": {
                      "attributes-ie": {
                        "-pie-background": "#9E1E14",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#m-e47948b9-Text_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_19": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "OpenSans-Regular,Arial"
                      }
                    }
                  },{
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_19 span": {
                      "attributes": {
                        "color": "#5A5A5A",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "OpenSans-Regular,Arial",
                        "font-size": "10.0pt"
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
    } else if(jFirer.is("#m-e47948b9-Text_20") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_20": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "OpenSans-Regular,Arial"
                      }
                    }
                  },{
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_20 span": {
                      "attributes": {
                        "color": "#5A5A5A",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "OpenSans-Regular,Arial",
                        "font-size": "10.0pt"
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
    } else if(jFirer.is("#m-e47948b9-Text_21") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_21": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "OpenSans-Regular,Arial"
                      }
                    }
                  },{
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_21 span": {
                      "attributes": {
                        "color": "#5A5A5A",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "OpenSans-Regular,Arial",
                        "font-size": "10.0pt"
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
    } else if(jFirer.is("#m-e47948b9-Panel_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-e47948b9-login_popup"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-e47948b9-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Button_1": {
                      "attributes": {
                        "background-color": "#000000",
                        "background-image": "none",
                        "font-size": "11.0pt",
                        "font-family": "OpenSans-Regular,Arial"
                      }
                    }
                  },{
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Button_1 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "OpenSans-Regular,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#000000",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#m-e47948b9-Text_23") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_23": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "OpenSans-Regular,Arial"
                      }
                    }
                  },{
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_23 span": {
                      "attributes": {
                        "color": "#5A5A5A",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "OpenSans-Regular,Arial",
                        "font-size": "10.0pt"
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
    } else if(jFirer.is("#m-e47948b9-Text_24") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_24": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "OpenSans-Regular,Arial"
                      }
                    }
                  },{
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_24 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_24 span": {
                      "attributes": {
                        "color": "#5A5A5A",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "OpenSans-Regular,Arial",
                        "font-size": "10.0pt"
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
    } else if(jFirer.is("#m-e47948b9-Text_25") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_25": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "OpenSans-Regular,Arial"
                      }
                    }
                  },{
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_25 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-e47948b9-a21b-4f48-a4b3-861286beae42 #m-e47948b9-Text_25 span": {
                      "attributes": {
                        "color": "#5A5A5A",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "OpenSans-Regular,Arial",
                        "font-size": "10.0pt"
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
    } else if(jFirer.is("#m-e47948b9-Panel_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-e47948b9-login_popup"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-e47948b9-Panel_7"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-e47948b9-Panel_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-e47948b9-login_popup"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-e47948b9-Panel_9"
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
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".m-e47948b9-a21b-4f48-a4b3-861286beae42 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#m-e47948b9-Panel_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-e47948b9-Button_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-e47948b9-Text_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-e47948b9-Text_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-e47948b9-Text_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-e47948b9-Panel_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-e47948b9-Button_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-e47948b9-Text_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-e47948b9-Text_24")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-e47948b9-Text_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-e47948b9-Panel_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-e47948b9-Panel_8")) {
      jEvent.undoCases(jFirer);
    }
  });