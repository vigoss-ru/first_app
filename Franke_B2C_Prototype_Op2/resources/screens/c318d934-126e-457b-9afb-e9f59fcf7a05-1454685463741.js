jQuery("#simulation")
  .on("click", ".s-c318d934-126e-457b-9afb-e9f59fcf7a05 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
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
                    "element": "email"
                  },"tora.collani@sharis.de" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressStreetAndNr",
                    "value": "Maxstr. 3"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressZipAndCity",
                    "value": "133347, Berlin"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressCountry",
                    "value": null
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
                    "variable": "billingAddressStreetAndNr",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressZipAndCity",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ null,", " ]
                      },null ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressCountry",
                    "value": "Germany"
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
                    "variable": "deliveryAddressType",
                    "value": "same"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fd94477b-7c27-4eec-ae28-d5173d26b5f2"
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
    } else if(jFirer.is("#s-Button_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "countNewAddress",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "countNewAddress"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "streetProvisional",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_15",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "Addresses",
                    "fields": {
                      "type": "billing",
                      "mainDel": "true",
                      "mainBill": "true",
                      "title": {
                        "datatype": "variable",
                        "element": "title"
                      },
                      "name": {
                        "datatype": "property",
                        "target": "#s-Input_10",
                        "property": "jimGetValue"
                      },
                      "lastname": {
                        "datatype": "property",
                        "target": "#s-Input_11",
                        "property": "jimGetValue"
                      },
                      "street": {
                        "datatype": "property",
                        "target": "#s-Input_15",
                        "property": "jimGetValue"
                      },
                      "houseNr.": null,
                      "afix": {
                        "datatype": "property",
                        "target": "#s-Input_19",
                        "property": "jimGetValue"
                      },
                      "zip": {
                        "datatype": "property",
                        "target": "#s-Input_20",
                        "property": "jimGetValue"
                      },
                      "city": {
                        "datatype": "property",
                        "target": "#s-Input_23",
                        "property": "jimGetValue"
                      },
                      "country": {
                        "datatype": "property",
                        "target": "#s-Category_6",
                        "property": "jimGetSelectedValue"
                      },
                      "addressName": null,
                      "email": {
                        "datatype": "variable",
                        "element": "email"
                      },
                      "completeName": {
                        "action": "jimConcat",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Category_5",
                          "property": "jimGetSelectedValue"
                        },{
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ " ",{
                              "datatype": "property",
                              "target": "#s-Input_10",
                              "property": "jimGetValue"
                            } ]
                          },{
                            "action": "jimConcat",
                            "parameter": [ " ",{
                              "datatype": "property",
                              "target": "#s-Input_11",
                              "property": "jimGetValue"
                            } ]
                          } ]
                        } ]
                      },
                      "ID": {
                        "datatype": "variable",
                        "element": "countNewAddress"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_5"
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
                "action": "jimGreater",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "countNewAddress"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_2",
                    "value": {
                      "action": "jimSortDataDescendant",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Addresses",
                          "value": {
                            "action": "jimAnd",
                            "parameter": [ {
                              "action": "jimEquals",
                              "parameter": [ {
                                "field": "email"
                              },{
                                "datatype": "variable",
                                "element": "email"
                              } ]
                            },{
                              "action": "jimAnd",
                              "parameter": [ {
                                "action": "jimGreaterOrEquals",
                                "parameter": [ {
                                  "field": "ID"
                                },{
                                  "action": "jimMinus",
                                  "parameter": [ {
                                    "datatype": "variable",
                                    "element": "countNewAddress"
                                  },"3" ]
                                } ]
                              },{
                                "action": "jimLessOrEquals",
                                "parameter": [ {
                                  "field": "ID"
                                },{
                                  "datatype": "variable",
                                  "element": "countNewAddress"
                                } ]
                              } ]
                            } ]
                          }
                        },
                        "value": {
                          "field": "ID"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "countNewAddress"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_10"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_1",
                    "value": {
                      "action": "jimSortDataDescendant",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Addresses",
                          "value": {
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "email"
                            },{
                              "datatype": "variable",
                              "element": "email"
                            } ]
                          }
                        },
                        "value": {
                          "field": "ID"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "newAddress"
                },"false" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressStreetAndNr",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_15",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressZipAndCity",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_20",
                          "property": "jimGetValue"
                        },", " ]
                      },{
                        "datatype": "property",
                        "target": "#s-Input_23",
                        "property": "jimGetValue"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressCountry",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_6",
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
                    "variable": "selectedAddress",
                    "value": {
                      "datatype": "variable",
                      "element": "countNewAddress"
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
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": ".s-Input_22"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": ".s-Input_25"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": ".s-Input_18"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": ".s-Input_22"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": ".s-Input_25"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": ".s-Input_18"
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
    } else if(jFirer.is(".s-Grid_cell_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "selectedAddress",
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_24",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c318d934-126e-457b-9afb-e9f59fcf7a05"
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
    } else if(jFirer.is("#s-Button_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_18"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3"
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
    } else if(jFirer.is("#s-Text_27")) {
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
                    "target": "#s-billingAddress_3",
                    "value": {
                      "action": "jimSortDataDescendant",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Addresses",
                          "value": {
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "email"
                            },{
                              "datatype": "variable",
                              "element": "email"
                            } ]
                          }
                        },
                        "value": {
                          "field": "ID"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": ".s-Input_18"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": ".s-Input_18"
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
    } else if(jFirer.is("#s-Text_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_2",
                    "value": {
                      "action": "jimSortDataDescendant",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Addresses",
                          "value": {
                            "action": "jimAnd",
                            "parameter": [ {
                              "action": "jimEquals",
                              "parameter": [ {
                                "field": "email"
                              },{
                                "datatype": "variable",
                                "element": "email"
                              } ]
                            },{
                              "action": "jimAnd",
                              "parameter": [ {
                                "action": "jimGreaterOrEquals",
                                "parameter": [ {
                                  "field": "ID"
                                },{
                                  "action": "jimMinus",
                                  "parameter": [ {
                                    "datatype": "variable",
                                    "element": "countNewAddress"
                                  },"3" ]
                                } ]
                              },{
                                "action": "jimLessOrEquals",
                                "parameter": [ {
                                  "field": "ID"
                                },{
                                  "datatype": "variable",
                                  "element": "countNewAddress"
                                } ]
                              } ]
                            } ]
                          }
                        },
                        "value": {
                          "field": "ID"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": ".s-Input_25"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": ".s-Input_25"
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
    } else if(jFirer.is("#s-Radio_button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_25"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_8",
                    "value": {
                      "action": "jimSortDataDescendant",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Addresses",
                          "value": {
                            "action": "jimAnd",
                            "parameter": [ {
                              "action": "jimEquals",
                              "parameter": [ {
                                "field": "email"
                              },{
                                "datatype": "variable",
                                "element": "email"
                              } ]
                            },{
                              "action": "jimAnd",
                              "parameter": [ {
                                "action": "jimGreaterOrEquals",
                                "parameter": [ {
                                  "field": "ID"
                                },{
                                  "action": "jimMinus",
                                  "parameter": [ {
                                    "datatype": "variable",
                                    "element": "countNewAddress"
                                  },"3" ]
                                } ]
                              },{
                                "action": "jimLessOrEquals",
                                "parameter": [ {
                                  "field": "ID"
                                },{
                                  "datatype": "variable",
                                  "element": "countNewAddress"
                                } ]
                              } ]
                            } ]
                          }
                        },
                        "value": {
                          "field": "ID"
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
                    "target": "#s-Radio_button_10",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": ".s-Input_28"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": ".s-Input_28"
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
    } else if(jFirer.is("#s-Radio_button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_22"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Radio_button_4",
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
    } else if(jFirer.is("#s-Button_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
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
                    "element": "email"
                  },"tora.collani@sharis.de" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressStreetAndNr",
                    "value": "Maxstr. 3"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressZipAndCity",
                    "value": "133347, Berlin"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressCountry",
                    "value": null
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
                    "variable": "billingAddressStreetAndNr",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressZipAndCity",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ null,", " ]
                      },null ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressCountry",
                    "value": "Germany"
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
                    "variable": "deliveryAddressType",
                    "value": "same"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fd94477b-7c27-4eec-ae28-d5173d26b5f2"
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
              "condition": {
                "action": "jimAnd",
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
                    "element": "email"
                  },"tora.collani@sharis.de" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressStreetAndNr",
                    "value": "Maxstr. 3"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressZipAndCity",
                    "value": "133347, Berlin"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressCountry",
                    "value": null
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
                    "variable": "billingAddressStreetAndNr",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressZipAndCity",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ null,", " ]
                      },null ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressCountry",
                    "value": "Germany"
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
                    "variable": "deliveryAddressType",
                    "value": "same"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fd94477b-7c27-4eec-ae28-d5173d26b5f2"
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
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "countNewAddress",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "countNewAddress"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "streetProvisional",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_15",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "Addresses",
                    "fields": {
                      "type": "billing",
                      "mainDel": "true",
                      "mainBill": "true",
                      "title": {
                        "datatype": "variable",
                        "element": "title"
                      },
                      "name": {
                        "datatype": "property",
                        "target": "#s-Input_10",
                        "property": "jimGetValue"
                      },
                      "lastname": {
                        "datatype": "property",
                        "target": "#s-Input_11",
                        "property": "jimGetValue"
                      },
                      "street": {
                        "datatype": "property",
                        "target": "#s-Input_15",
                        "property": "jimGetValue"
                      },
                      "houseNr.": null,
                      "afix": {
                        "datatype": "property",
                        "target": "#s-Input_19",
                        "property": "jimGetValue"
                      },
                      "zip": {
                        "datatype": "property",
                        "target": "#s-Input_20",
                        "property": "jimGetValue"
                      },
                      "city": {
                        "datatype": "property",
                        "target": "#s-Input_23",
                        "property": "jimGetValue"
                      },
                      "country": {
                        "datatype": "property",
                        "target": "#s-Category_6",
                        "property": "jimGetSelectedValue"
                      },
                      "addressName": null,
                      "email": {
                        "datatype": "variable",
                        "element": "email"
                      },
                      "completeName": {
                        "action": "jimConcat",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Category_5",
                          "property": "jimGetSelectedValue"
                        },{
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ " ",{
                              "datatype": "property",
                              "target": "#s-Input_10",
                              "property": "jimGetValue"
                            } ]
                          },{
                            "action": "jimConcat",
                            "parameter": [ " ",{
                              "datatype": "property",
                              "target": "#s-Input_11",
                              "property": "jimGetValue"
                            } ]
                          } ]
                        } ]
                      },
                      "ID": {
                        "datatype": "variable",
                        "element": "countNewAddress"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_5"
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
                "action": "jimGreater",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "countNewAddress"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_2",
                    "value": {
                      "action": "jimSortDataDescendant",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Addresses",
                          "value": {
                            "action": "jimAnd",
                            "parameter": [ {
                              "action": "jimEquals",
                              "parameter": [ {
                                "field": "email"
                              },{
                                "datatype": "variable",
                                "element": "email"
                              } ]
                            },{
                              "action": "jimAnd",
                              "parameter": [ {
                                "action": "jimGreaterOrEquals",
                                "parameter": [ {
                                  "field": "ID"
                                },{
                                  "action": "jimMinus",
                                  "parameter": [ {
                                    "datatype": "variable",
                                    "element": "countNewAddress"
                                  },"3" ]
                                } ]
                              },{
                                "action": "jimLessOrEquals",
                                "parameter": [ {
                                  "field": "ID"
                                },{
                                  "datatype": "variable",
                                  "element": "countNewAddress"
                                } ]
                              } ]
                            } ]
                          }
                        },
                        "value": {
                          "field": "ID"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "countNewAddress"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_10"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_1",
                    "value": {
                      "action": "jimSortDataDescendant",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Addresses",
                          "value": {
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "email"
                            },{
                              "datatype": "variable",
                              "element": "email"
                            } ]
                          }
                        },
                        "value": {
                          "field": "ID"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "newAddress"
                },"false" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressStreetAndNr",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_15",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressZipAndCity",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_20",
                          "property": "jimGetValue"
                        },", " ]
                      },{
                        "datatype": "property",
                        "target": "#s-Input_23",
                        "property": "jimGetValue"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressCountry",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_6",
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
                    "variable": "selectedAddress",
                    "value": {
                      "datatype": "variable",
                      "element": "countNewAddress"
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
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": ".s-Input_22"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": ".s-Input_25"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": ".s-Input_18"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": ".s-Input_22"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": ".s-Input_25"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": ".s-Input_18"
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
  .on("keyup.jim", ".s-c318d934-126e-457b-9afb-e9f59fcf7a05 .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_11"
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
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_15"
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
    } else if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_19"
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
    } else if(jFirer.is("#s-Input_19")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_20"
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
    } else if(jFirer.is("#s-Input_20")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_23"
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
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_15"
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
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_15"
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
    } else if(jFirer.is("#s-Input_14")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_15"
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
  .on("pageload", ".s-c318d934-126e-457b-9afb-e9f59fcf7a05 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-c318d934-126e-457b-9afb-e9f59fcf7a05")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-Category_5",
                    "value": {
                      "datatype": "variable",
                      "element": "title"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_10",
                    "value": {
                      "datatype": "variable",
                      "element": "name"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_11",
                    "value": {
                      "datatype": "variable",
                      "element": "lastname"
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
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "countNewAddress"
                  },"1" ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "countNewAddress"
                  },"4" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_5"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_10"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_1",
                    "value": {
                      "action": "jimSortDataDescendant",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Addresses",
                          "value": {
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "email"
                            },{
                              "datatype": "variable",
                              "element": "email"
                            } ]
                          }
                        },
                        "value": {
                          "field": "ID"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "countNewAddress"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_18"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_2",
                    "value": {
                      "action": "jimSortDataDescendant",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Addresses",
                          "value": {
                            "action": "jimAnd",
                            "parameter": [ {
                              "action": "jimEquals",
                              "parameter": [ {
                                "field": "email"
                              },{
                                "datatype": "variable",
                                "element": "email"
                              } ]
                            },{
                              "action": "jimLessOrEquals",
                              "parameter": [ {
                                "field": "ID"
                              },"4" ]
                            } ]
                          }
                        },
                        "value": {
                          "field": "ID"
                        }
                      }
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
                    "target": "#s-Panel_18"
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
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": ".s-Input_22"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": ".s-Input_22"
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
  .on("focusin", ".s-c318d934-126e-457b-9afb-e9f59fcf7a05 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Input_22")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": ".s-Input_24",
                  "property": "jimGetValue"
                },{
                  "datatype": "variable",
                  "element": "selectedAddress"
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": ".s-Radio_button_1",
                    "value": "true"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_1 .s-Grid_cell_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_1 .s-Grid_cell_3": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
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
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_1 .s-Grid_cell_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_1 .s-Grid_cell_3": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E6E6E6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E6E6E6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E6E6E6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E6E6E6",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Input_25")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": ".s-Input_27",
                  "property": "jimGetValue"
                },{
                  "datatype": "variable",
                  "element": "selectedAddress"
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": ".s-Radio_button_2",
                    "value": "true"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_2 .s-Grid_cell_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_2 .s-Grid_cell_1": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
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
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_2 .s-Grid_cell_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_2 .s-Grid_cell_1": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E6E6E6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E6E6E6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E6E6E6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E6E6E6",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Input_18")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": ".s-Input_21",
                  "property": "jimGetValue"
                },{
                  "datatype": "variable",
                  "element": "selectedAddress"
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": ".s-Radio_button_3",
                    "value": "true"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_3 .s-Grid_cell_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_3 .s-Grid_cell_4": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
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
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_3 .s-Grid_cell_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_3 .s-Grid_cell_4": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E6E6E6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E6E6E6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E6E6E6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E6E6E6",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Input_28")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": ".s-Input_29",
                  "property": "jimGetValue"
                },{
                  "datatype": "variable",
                  "element": "selectedAddress"
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": ".s-Radio_button_7",
                    "value": "true"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_8 .s-Grid_cell_8 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_8 .s-Grid_cell_8": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
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
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_8 .s-Grid_cell_8 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_8 .s-Grid_cell_8": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E6E6E6",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E6E6E6",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E6E6E6",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E6E6E6",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Category_5": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#699CFC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#699CFC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#699CFC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#699CFC",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_10": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#699CFC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#699CFC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#699CFC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#699CFC",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_11": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#699CFC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#699CFC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#699CFC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#699CFC",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_15": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#699CFC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#699CFC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#699CFC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#699CFC",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_19": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#699CFC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#699CFC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#699CFC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#699CFC",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_20": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#699CFC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#699CFC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#699CFC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#699CFC",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_23": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#699CFC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#699CFC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#699CFC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#699CFC",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Category_6": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#699CFC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#699CFC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#699CFC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#699CFC",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_12": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#699CFC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#699CFC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#699CFC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#699CFC",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_13": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#699CFC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#699CFC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#699CFC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#699CFC",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_14": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#699CFC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#699CFC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#699CFC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#699CFC",
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-c318d934-126e-457b-9afb-e9f59fcf7a05 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Category_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Category_5": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#B6B7B7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#B6B7B7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#B6B7B7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#B6B7B7",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_10": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#B6B7B7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#B6B7B7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#B6B7B7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#B6B7B7",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_11": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#B6B7B7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#B6B7B7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#B6B7B7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#B6B7B7",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_15": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#B6B7B7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#B6B7B7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#B6B7B7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#B6B7B7",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_19": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#B6B7B7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#B6B7B7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#B6B7B7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#B6B7B7",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_20": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#B6B7B7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#B6B7B7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#B6B7B7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#B6B7B7",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_23": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#B6B7B7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#B6B7B7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#B6B7B7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#B6B7B7",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Category_6": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#B6B7B7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#B6B7B7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#B6B7B7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#B6B7B7",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_12": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#B6B7B7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#B6B7B7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#B6B7B7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#B6B7B7",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_13": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#B6B7B7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#B6B7B7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#B6B7B7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#B6B7B7",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Input_14": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#B6B7B7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#B6B7B7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#B6B7B7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#B6B7B7",
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-c318d934-126e-457b-9afb-e9f59fcf7a05 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Button_8": {
                      "attributes": {
                        "background-color": "#9E1E14",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Button_8": {
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
    } else if(jFirer.is("#s-Button_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Button_12": {
                      "attributes": {
                        "background-color": "#9E1E14",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Button_12": {
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
    } else if(jFirer.is(".s-Grid_cell_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_1 .s-Grid_cell_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_1 .s-Grid_cell_3": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
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
    } else if(jFirer.is(".s-Text_47") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_1 .s-Text_47": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "OpenSans-Bold,Arial"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_1 .s-Text_47 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_1 .s-Text_47 span": {
                      "attributes": {
                        "color": "#5A5A5A",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "OpenSans-Bold,Arial",
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
    } else if(jFirer.is(".s-Text_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_2 .s-Text_6": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "OpenSans-Bold,Arial"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_2 .s-Text_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_2 .s-Text_6 span": {
                      "attributes": {
                        "color": "#5A5A5A",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "OpenSans-Bold,Arial",
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
    } else if(jFirer.is(".s-Text_28") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_3 .s-Text_28": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "OpenSans-Bold,Arial"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_3 .s-Text_28 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_3 .s-Text_28 span": {
                      "attributes": {
                        "color": "#5A5A5A",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "OpenSans-Bold,Arial",
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
    } else if(jFirer.is(".s-Text_39") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_8 .s-Text_39": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "OpenSans-Bold,Arial"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_8 .s-Text_39 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-billingAddress_8 .s-Text_39 span": {
                      "attributes": {
                        "color": "#5A5A5A",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "OpenSans-Bold,Arial",
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
    } else if(jFirer.is("#s-Button_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Button_10": {
                      "attributes": {
                        "background-color": "#9E1E14",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Button_10": {
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
    } else if(jFirer.is("#s-Button_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Button_4": {
                      "attributes": {
                        "background-color": "#9E1E14",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Button_4": {
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
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Button_11": {
                      "attributes": {
                        "background-color": "#9E1E14",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c318d934-126e-457b-9afb-e9f59fcf7a05 #s-Button_11": {
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
    } else if(jFirer.is("#s-Image_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": "#s-Dynamic_Panel_5"
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
  .on("mouseleave dragleave", ".s-c318d934-126e-457b-9afb-e9f59fcf7a05 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Grid_cell_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Text_47")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Text_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Text_28")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Text_39")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_2")) {
      jEvent.undoCases(jFirer);
    }
  });