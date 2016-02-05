jQuery("#simulation")
  .on("click", ".s-e65ad567-89e4-4962-9a89-806d561fd911 .click", function(event, data) {
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
    } else if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "creditCardType",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_2",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "creditCardLast4Digits",
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_13",
                        "property": "jimGetValue"
                      },{
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimCount",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Input_13",
                            "property": "jimGetValue"
                          } ]
                        },"4" ]
                      },{
                        "action": "jimCount",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_13",
                          "property": "jimGetValue"
                        } ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "creditCardLast4DigitsWithX",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ "XXXX - XXXX - XXXX - ",{
                        "datatype": "variable",
                        "element": "creditCardLast4Digits"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "creditCardHolder",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_12",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "creditCardExpMonth",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_3",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "creditCardExpYear",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_4",
                      "property": "jimGetSelectedValue"
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
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "backToChange",
                    "value": "false"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2dfb3f17-7c90-4eb6-90e0-9b95c49ef215"
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
    } else if(jFirer.is("#s-Radio_button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_9"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_7"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Radio_button_2",
                    "value": "false"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Group_2",
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimPlus",
                          "parameter": [ {
                            "action": "jimPlus",
                            "parameter": [ {
                              "datatype": "property",
                              "target": "#s-Panel_9",
                              "property": "jimGetAbsolutePositionY"
                            },{
                              "datatype": "property",
                              "target": "#s-Panel_9",
                              "property": "jimGetHeight"
                            } ]
                          },{
                            "datatype": "property",
                            "target": "#s-Panel_7",
                            "property": "jimGetHeight"
                          } ]
                        },"20" ]
                      }
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "1051"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_12",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "name"
                        }," " ]
                      },{
                        "datatype": "variable",
                        "element": "lastname"
                      } ]
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
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "paymentMethod",
                    "value": "visa"
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
    } else if(jFirer.is("#s-Text_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_15"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_14",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ {
                              "action": "jimConcat",
                              "parameter": [ {
                                "action": "jimConcat",
                                "parameter": [ {
                                  "action": "jimConcat",
                                  "parameter": [ {
                                    "action": "jimConcat",
                                    "parameter": [ {
                                      "action": "jimConcat",
                                      "parameter": [ {
                                        "datatype": "variable",
                                        "element": "creditCardType"
                                      }," | " ]
                                    },{
                                      "datatype": "variable",
                                      "element": "creditCardHolder"
                                    } ]
                                  },", " ]
                                },{
                                  "datatype": "variable",
                                  "element": "creditCardLast4DigitsWithX"
                                } ]
                              },", valid til " ]
                            },{
                              "datatype": "variable",
                              "element": "creditCardExpMonth"
                            } ]
                          },"/" ]
                        },{
                          "datatype": "variable",
                          "element": "creditCardExpYear"
                        } ]
                      }," | Delete" ]
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
    } else if(jFirer.is("#s-Radio_button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_8"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_6"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Radio_button_4",
                    "value": "false"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Group_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "538"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "1051"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "paymentMethod",
                    "value": "paypal"
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
    } else if(jFirer.is("#s-Button_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "creditCardType",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_2",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "creditCardLast4Digits",
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_13",
                        "property": "jimGetValue"
                      },{
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimCount",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Input_13",
                            "property": "jimGetValue"
                          } ]
                        },"4" ]
                      },{
                        "action": "jimCount",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_13",
                          "property": "jimGetValue"
                        } ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "creditCardLast4DigitsWithX",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ "XXXX - XXXX - XXXX - ",{
                        "datatype": "variable",
                        "element": "creditCardLast4Digits"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "creditCardHolder",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_12",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "creditCardExpMonth",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_3",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "creditCardExpYear",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_4",
                      "property": "jimGetSelectedValue"
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
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "backToChange",
                    "value": "false"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2dfb3f17-7c90-4eb6-90e0-9b95c49ef215"
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
  .on("pageload", ".s-e65ad567-89e4-4962-9a89-806d561fd911 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-e65ad567-89e4-4962-9a89-806d561fd911")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_51",
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
                    "target": "#s-Label_52",
                    "value": {
                      "datatype": "variable",
                      "element": "email"
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
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Panel_10",
                    "width": {
                      "type": "exprvalue",
                      "value": "215"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "230"
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
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Panel_10",
                    "width": {
                      "type": "exprvalue",
                      "value": "215"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "281"
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
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Panel_10",
                    "width": {
                      "type": "exprvalue",
                      "value": "215"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "281"
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
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "backToChange"
                  },"true" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "paymentMethod"
                  },"visa" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_14"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_7"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_11",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ {
                              "action": "jimConcat",
                              "parameter": [ {
                                "action": "jimConcat",
                                "parameter": [ {
                                  "action": "jimConcat",
                                  "parameter": [ {
                                    "action": "jimConcat",
                                    "parameter": [ {
                                      "action": "jimConcat",
                                      "parameter": [ {
                                        "datatype": "variable",
                                        "element": "creditCardType"
                                      }," | " ]
                                    },{
                                      "datatype": "variable",
                                      "element": "creditCardHolder"
                                    } ]
                                  },", " ]
                                },{
                                  "datatype": "variable",
                                  "element": "creditCardLast4DigitsWithX"
                                } ]
                              },", valid til " ]
                            },{
                              "datatype": "variable",
                              "element": "creditCardExpMonth"
                            } ]
                          },"/" ]
                        },{
                          "datatype": "variable",
                          "element": "creditCardExpYear"
                        } ]
                      }," | Delete" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "backToChange"
                  },"true" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "paymentMethod"
                  },"paypal" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_8"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
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
  });