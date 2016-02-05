jQuery("#simulation")
  .on("click", ".s-7b555f66-68ed-4142-bc52-39404940f1ef .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1"
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
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_4"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_6"
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "loggedIn",
                    "value": "true"
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
    } else if(jFirer.is("#s-Label_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1"
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
    } else if(jFirer.is("#s-Label_91")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_14"
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
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_11",
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimPlus",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Panel_7",
                            "property": "jimGetAbsolutePositionY"
                          },{
                            "datatype": "property",
                            "target": "#s-Panel_7",
                            "property": "jimGetHeight"
                          } ]
                        },"25" ]
                      }
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_2",
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimPlus",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Panel_22",
                            "property": "jimGetAbsolutePositionY"
                          },{
                            "datatype": "property",
                            "target": "#s-Panel_22",
                            "property": "jimGetHeight"
                          } ]
                        },"25" ]
                      }
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false
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
    } else if(jFirer.is("#s-Text_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_6"
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
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_11",
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimPlus",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Panel_7",
                            "property": "jimGetAbsolutePositionY"
                          },{
                            "datatype": "property",
                            "target": "#s-Panel_7",
                            "property": "jimGetHeight"
                          } ]
                        },"25" ]
                      }
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_2",
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimPlus",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Panel_22",
                            "property": "jimGetAbsolutePositionY"
                          },{
                            "datatype": "property",
                            "target": "#s-Panel_22",
                            "property": "jimGetHeight"
                          } ]
                        },"25" ]
                      }
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "returnAllItems",
                    "value": "false"
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
                    "target": "screens/ec440e69-0f78-4b87-8bc6-e8332b949495"
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
    } else if(jFirer.is("#s-Text_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_16"
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
  .on("pageload", ".s-7b555f66-68ed-4142-bc52-39404940f1ef .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-7b555f66-68ed-4142-bc52-39404940f1ef")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "deliveryAddressType"
                },"same" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_13"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_67",
                    "value": {
                      "datatype": "variable",
                      "element": "nameComplete"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_68",
                    "value": {
                      "datatype": "variable",
                      "element": "billingAddressStreetAndNr"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_69",
                    "value": {
                      "datatype": "variable",
                      "element": "billingAddressZipAndCity"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_70",
                    "value": {
                      "datatype": "variable",
                      "element": "billingAddressCountry"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_90",
                    "value": {
                      "datatype": "variable",
                      "element": "nameComplete"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_9",
                    "value": {
                      "datatype": "variable",
                      "element": "nameComplete"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_101",
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "deliveryAddressType"
                },"new" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_12"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_67",
                    "value": {
                      "datatype": "variable",
                      "element": "nameComplete"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_68",
                    "value": {
                      "datatype": "variable",
                      "element": "billingAddressStreetAndNr"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_69",
                    "value": {
                      "datatype": "variable",
                      "element": "billingAddressZipAndCity"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_70",
                    "value": {
                      "datatype": "variable",
                      "element": "billingAddressCountry"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_72",
                    "value": {
                      "datatype": "variable",
                      "element": "newDelivAddressCompleteName"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_73",
                    "value": {
                      "datatype": "variable",
                      "element": "newDelivAddressStreetAndNr"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_74",
                    "value": {
                      "datatype": "variable",
                      "element": "newDelivAddressZipAndCity"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_75",
                    "value": {
                      "datatype": "variable",
                      "element": "newDelivAddressCountry"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_90",
                    "value": {
                      "datatype": "variable",
                      "element": "newDelivAddressCompleteName"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_9",
                    "value": {
                      "datatype": "variable",
                      "element": "newDelivAddressCompleteName"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_101",
                    "value": {
                      "datatype": "variable",
                      "element": "newDelivAddressCompleteName"
                    }
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
                  "datatype": "variable",
                  "element": "deliveryAddressType"
                },"fromBook" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_12"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_67",
                    "value": {
                      "datatype": "variable",
                      "element": "nameComplete"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_68",
                    "value": {
                      "datatype": "variable",
                      "element": "billingAddressStreetAndNr"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_69",
                    "value": {
                      "datatype": "variable",
                      "element": "billingAddressZipAndCity"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_70",
                    "value": {
                      "datatype": "variable",
                      "element": "billingAddressCountry"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_72",
                    "value": {
                      "datatype": "variable",
                      "element": "fromBookDelivAddressCompleteName"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_73",
                    "value": {
                      "datatype": "variable",
                      "element": "fromBookDelivAddressStreetAndNr"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_74",
                    "value": {
                      "datatype": "variable",
                      "element": "fromBookDelivAddressZipAndCity"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_75",
                    "value": {
                      "datatype": "variable",
                      "element": "fromBookDelivAddressCountry"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_90",
                    "value": {
                      "datatype": "variable",
                      "element": "fromBookDelivAddressCompleteName"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_9",
                    "value": {
                      "datatype": "variable",
                      "element": "fromBookDelivAddressCompleteName"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_101",
                    "value": {
                      "datatype": "variable",
                      "element": "fromBookDelivAddressCompleteName"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "paymentMethod"
                },"visa" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_85",
                    "value": {
                      "datatype": "variable",
                      "element": "email"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_86",
                    "value": "Visa"
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
                  "datatype": "variable",
                  "element": "paymentMethod"
                },"mastercard" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_85",
                    "value": {
                      "datatype": "variable",
                      "element": "email"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_86",
                    "value": "Mastercard"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_85",
                    "value": {
                      "datatype": "variable",
                      "element": "email"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_86",
                    "value": "Paypal"
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_6"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_6",
                    "value": {
                      "datatype": "variable",
                      "element": "nameComplete"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_4"
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
  .on("mouseenter dragenter", ".s-7b555f66-68ed-4142-bc52-39404940f1ef .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7b555f66-68ed-4142-bc52-39404940f1ef #s-Button_9": {
                      "attributes": {
                        "background-color": "#C2231B",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7b555f66-68ed-4142-bc52-39404940f1ef #s-Button_9": {
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
    } else if(jFirer.is("#s-Button_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7b555f66-68ed-4142-bc52-39404940f1ef #s-Button_11": {
                      "attributes": {
                        "background-color": "#C2231B",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7b555f66-68ed-4142-bc52-39404940f1ef #s-Button_11": {
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
  .on("mouseleave dragleave", ".s-7b555f66-68ed-4142-bc52-39404940f1ef .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_11")) {
      jEvent.undoCases(jFirer);
    }
  });