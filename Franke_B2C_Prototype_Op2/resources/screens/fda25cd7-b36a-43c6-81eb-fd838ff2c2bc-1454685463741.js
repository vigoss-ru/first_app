jQuery("#simulation")
  .on("click", ".s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_3")) {
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4156ad78-8224-42cf-b27f-0daa41cfcbac"
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
    } else if(jFirer.is(".s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "gridcell",
                    "datamaster": "ShoppingCart",
                    "element": "#s-ShoppingCart",
                    "fields": {
                      "foto": null,
                      "name": null,
                      "description": null,
                      "art.nr": null,
                      "qtty": "2",
                      "price": null,
                      "Totalprice": "82,00 \u20ac",
                      "return": null,
                      "delivery": null,
                      "comments_problems": null,
                      "comments_problems_Link": null
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-ShoppingCart",
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "ShoppingCart"
                    }
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
    } else if(jFirer.is("#s-Button_5")) {
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4156ad78-8224-42cf-b27f-0daa41cfcbac"
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
    } else if(jFirer.is("#s-Panel_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fda25cd7-b36a-43c6-81eb-fd838ff2c2bc"
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
  .on("keyup.jim", ".s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": ".s-Input_5",
                  "property": "jimGetValue"
                },{
                  "action": "jimSelectData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "ShoppingCart",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "art.nr"
                        },{
                          "datatype": "property",
                          "target": ".s-Input_4",
                          "property": "jimGetValue"
                        } ]
                      }
                    },
                    "value": {
                      "field": "qtty"
                    }
                  }
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": ".s-Button_7"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": ".s-Input_5",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": ".s-Button_7"
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
                    "target": ".s-Button_7"
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
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "gridcell",
                    "datamaster": "ShoppingCart",
                    "element": "#s-ShoppingCart",
                    "fields": {
                      "foto": null,
                      "name": null,
                      "description": null,
                      "art.nr": null,
                      "qtty": "2",
                      "price": null,
                      "Totalprice": "82,00 \u20ac",
                      "return": null,
                      "delivery": null,
                      "comments_problems": null,
                      "comments_problems_Link": null
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-ShoppingCart",
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "ShoppingCart"
                    }
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
  .on("pageload", ".s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "order",
                    "value": {
                      "action": "jimCountData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Orders",
                          "value": {
                            "action": "jimAnd",
                            "parameter": [ {
                              "action": "jimGreaterOrEquals",
                              "parameter": [ {
                                "field": "Date"
                              },"04/16/2015" ]
                            },{
                              "action": "jimLessOrEquals",
                              "parameter": [ {
                                "field": "Date"
                              },"05/28/2015" ]
                            } ]
                          }
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Sum",
                    "value": {
                      "action": "jimSumData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Orders",
                          "value": {
                            "action": "jimAnd",
                            "parameter": [ {
                              "action": "jimGreaterOrEquals",
                              "parameter": [ {
                                "field": "Date"
                              },"04/16/2015" ]
                            },{
                              "action": "jimLessOrEquals",
                              "parameter": [ {
                                "field": "Date"
                              },"05/28/2015" ]
                            } ]
                          }
                        },
                        "value": {
                          "field": "Amount (net)"
                        }
                      }
                    }
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
  .on("focusout", ".s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": ".s-Input_5",
                  "property": "jimGetValue"
                },{
                  "action": "jimSelectData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "ShoppingCart",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "art.nr"
                        },{
                          "datatype": "property",
                          "target": ".s-Input_4",
                          "property": "jimGetValue"
                        } ]
                      }
                    },
                    "value": {
                      "field": "qtty"
                    }
                  }
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-ShoppingCart",
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "ShoppingCart"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": ".s-Button_7"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": ".s-Input_5",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-ShoppingCart",
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "ShoppingCart"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": ".s-Button_7"
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
  .on("mouseenter dragenter", ".s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc #s-Button_3": {
                      "attributes": {
                        "background-color": "#9E1E14",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc #s-Button_3": {
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
    } else if(jFirer.is(".s-Label_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc #s-ShoppingCart .s-Label_16": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc #s-ShoppingCart .s-Label_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "right"
                      }
                    }
                  },{
                    "#s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc #s-ShoppingCart .s-Label_16 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "right",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is(".s-Label_21") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc #s-ShoppingCart .s-Label_21": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc #s-ShoppingCart .s-Label_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "right"
                      }
                    }
                  },{
                    "#s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc #s-ShoppingCart .s-Label_21 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "right",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is(".s-Button_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc #s-ShoppingCart .s-Button_7": {
                      "attributes": {
                        "background-color": "#9E1E14",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc #s-ShoppingCart .s-Button_7": {
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
    } else if(jFirer.is("#s-Button_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc #s-Button_5": {
                      "attributes": {
                        "background-color": "#C2231B",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc #s-Button_5": {
                      "attributes-ie": {
                        "-pie-background": "#C2231B",
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
    }
  })
  .on("mouseleave dragleave", ".s-fda25cd7-b36a-43c6-81eb-fd838ff2c2bc .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Label_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Label_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Button_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_5")) {
      jEvent.undoCases(jFirer);
    }
  });