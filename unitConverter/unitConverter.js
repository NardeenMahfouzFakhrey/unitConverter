function lengthConverter() {
    var value = document.querySelector('#lengthConverterContainer .Text-value').value;
    var from = document.querySelector('#lengthConverterContainer .select-bar:nth-of-type(1)').value;
    var to = document.querySelector('#lengthConverterContainer .select-bar:nth-of-type(2)').value;
     var result;
     value = parseFloat(value);
    if(from=="KiloMeter") {
         if(to=="KiloMeter") {
            result=value
          }
 
          else if(to=="Meter") {
           result = value * 1000
          }
 
          else if(to=="CentiMeter") {
             result = value * 100000
          }
          else if(to=="MilliMeter"){
             result = value * 1000000
          }
          else if(to== "NanoMeter") {
             result = value * 1e+12
          }
          else if(to=="Mile"){
             result = value * 0.621371
          }
          else if(to=="Inch")
          {
             result = value * 39370.1
          }
          else if(to=="Foot") {
             result = value * 3280.84
          }
 
    }
 
    if(from=="Meter") {
     if(to=="KiloMeter") 
      {
         result = value / 1000
      }
      else if(to=="Meter") {
         result = value 
      }
      else if(to=="CentiMeter") {
         result = value * 100
      }
      else if(to=="MilliMeter"){
         result = value * 1000
      }
      else if(to== "NanoMeter") {
         result = value * 1e+9
      }
      else if(to=="Mile"){
         result = value * 0.000621371
      }
      else if(to=="Inch")
      {
         result = value * 39.3701
      }
      else if(to=="Foot") {
         result = value * 3.28084  
      }
 
 }
 
 
 if(from=="CentiMeter") {
     if(to=="KiloMeter") 
 
      {
         result = value / 100000
      }
      else if(to=="Meter") {
         result = value /100
      }
      else if(to=="CentiMeter") {
         result = value 
      }
      else if(to=="MiliMeter"){
         result = value * 10
      }
      else if(to== "NanoMeter") {
         result = value * 1e+7
      }
      else if(to=="Mile"){
         result = value * 6.21371e-6
      }
      else if(to=="Inch")
      {
         result = value * 0.393701
      }
      else if(to=="Foot") {
         result = value * 0.0328084
      }
 
 }

 if (from == "MilliMeter") {
    if (to == "KiloMeter") {
        result = value * 0.000001;
    } else if (to == "Meter") {
        result = value * 0.001;
    } else if (to == "CentiMeter") {
        result = value * 0.1;
    } else if (to == "MilliMeter") {
        result = value;
    } else if (to == "NanoMeter") {
        result = value * 1000000;
    } else if (to == "Mile") {
        result = value * 6.2137e-7;
    } else if (to == "Inch") {
        result = value * 0.0393701;
    } else if (to == "Foot") {
        result = value * 0.00328084;
    }
}

 
 if(from=="NanoMeter") {
     if(to=="KiloMeter") 
 
      {
         result = value / 1e+12
      }
      else if(to=="Meter") {
         result = value /  1e+9
      }
      else if(to=="CentiMeter") {
         result = value / 1e+7
      }
      else if(to=="MilliMeter"){
         result = value /1e+6
      }
      else if(to== "NanoMeter") {
         result = value
      }
      else if(to=="Mile"){
        result = value * 6.21371e-13
      }
      else if(to=="Inch")
      {
         result = value *3.93701e-8
      }
      else if(to=="Foot") {
         result = value * 3.28084e-9 
      } 
 }
 
      if(from=="Mile") {
         if(to=="KiloMeter") 
 
          {
             result = value * 1.60934
          }
          else if(to=="Meter") {
             result = value * 1609.34
          }
          else if(to=="CentiMeter") {
             result = value * 6.21371e-6
          }
          else if(to=="MilliMeter"){
             result = value * 1.609e+6
          }
          else if(to== "NanoMeter") {
             result = value * 1.609e+12
          }
          else if(to=="Mile"){
             result = value
          }
          else if(to=="Inch")
          {
             result = value * 63360
          }
          else if(to=="Foot") {
             result = value * 5280
          }
 
    }
 
 
 
 if(from=="Inch") {
     if(to=="KiloMeter") 
 
      {
         result = value * 39370.1
      }
      else if(to=="Meter") {
         result = value * 0.0254
      }
      else if(to=="CentiMeter") {
         result = value * 2.54
      }
      else if(to=="MilliMeter"){
         result = value * 25.4
      } 
      else if(to== "NanoMeter") {
         result = value * 2.54e+7
      }
      else if(to=="Mile"){
         result = value * 1.57828e-5
      }
      else if(to=="Inch")
      {
         result = value
      }
      else if(to=="Foot") {
         result = value * 0.0833333 
      }
 
 }
 
 if(from=="Foot") {
 
     if(to=="KiloMeter") 
 
      {
         result = value * 0.0003048
      }
      else if(to=="Meter") {
         result = value * 0.3048
      }
      else if(to=="CentiMeter") {
         result = value * 30.48
      }
      else if(to=="MilliMeter"){
         result = value * 304.8
      }
      else if(to== "NanoMeter") {
         result = value * 3.048e+8
      }
      else if(to=="Mile"){
         result = value * 0.000189394
      }
      else if(to=="Inch")
      {
         result = value * 12
      }
      else if(to=="Foot") {
         result = value 
      } 
 
 }
 const resultDiv = document.getElementById('resultDiv1');
 
 resultDiv.innerHTML = result;
 return result;
 }


function tempConverter(from , to , value) {
    var value = document.querySelector('#tempConverterContainer .Text-value').value;
    var from = document.querySelector('#tempConverterContainer .select-bar:nth-of-type(1)').value;
    var to = document.querySelector('#tempConverterContainer .select-bar:nth-of-type(2)').value;
     var result;
    
     value = parseFloat(value);
    if(from == "celsius") {
        if(to == "celsius") {
            result = value 
        }
    
        else if(to == "kelvin") {
            result = value + 273.15
        }
        else if (to =="Fahrenheit") {
            result = value * 9/5 + 32
        } 
     
    }

    else if(from == "kelvin") {
        if(to == "celsius") {
            result = value - 273.15
        }
    
        else if(to == "kelvin") {
            result = value 
        }
        else if (to =="Fahrenheit") {
            result = (value - 273.15) *  9/5 + 32 
        }
    }
    else if (from=="Fahrenheit") {
        if(to == "celsius") {
            result = (value- 32) * 5/9
        }
    
        else if(to == "kelvin") {
            result = (value - 32) * 5/9 + 273.15
        }
        else if (to =="Fahrenheit") {
            result = value 
        }
    }
    const resultDiv = document.getElementById('resultDiv2');
    
    resultDiv.innerHTML = result;
    return result
}

function areaConverter() {
    var value = document.querySelector('#areaConverterContainer .Text-value').value;
    var from = document.querySelector('#areaConverterContainer .select-bar:nth-of-type(1)').value;
    var to = document.querySelector('#areaConverterContainer .select-bar:nth-of-type(2)').value;
    var result;
    
    if (from == "SquareKiloMeter") {
        if (to == "SquareKiloMeter") {
            result = value;
        } else if (to == "SquareMeter") {
            result = value * 1e+6;
        } else if (to == "SquareCentiMeter") {
            result = value * 1e+10;
        } else if (to == "SquareMilliMeter") {
            result = value * 1e+12;
        } else if (to == "SquareMicroMeter") {
            result = value * 1e+18;
        }
    }
    
    if (from == "SquareMeter") {
        if (to == "SquareKiloMeter") {
            result = value / 1e+6;
        } else if (to == "SquareMeter") {
            result = value;
        } else if (to == "SquareCentiMeter") {
            result = value * 10000;
        } else if (to == "SquareMilliMeter") {
            result = value * 1e+6;
        } else if (to == "SquareMicroMeter") {
            result = value * 1e+12;
        }
    }
    
    if (from == "SquareCentiMeter") {
        if (to == "SquareKiloMeter") {
            result = value / 1e+10;
        } else if (to == "SquareMeter") {
            result = value / 10000;
        } else if (to == "SquareCentiMeter") {
            result = value;
        } else if (to == "SquareMilliMeter") {
            result = value * 100;
        } else if (to == "SquareMicroMeter") {
            result = value * 1e+8;
        }
    }
    
    if (from == "SquareMilliMeter") {
        if (to == "SquareKiloMeter") {
            result = value / 1e+12;
        } else if (to == "SquareMeter") {
            result = value / 1e+6;
        } else if (to == "SquareCentiMeter") {
            result = value / 100;
        } else if (to == "SquareMilliMeter") {
            result = value;
        } else if (to == "SquareMicroMeter") {
            result = value * 1e+6;
        }
    }
    
    if (from == "SquareMicroMeter") {
        if (to == "SquareKiloMeter") {
            result = value / 1e+18;
        } else if (to == "SquareMeter") {
            result = value / 1e+12;
        } else if (to == "SquareCentiMeter") {
            result = value / 1e+8;
        } else if (to == "SquareMilliMeter") {
            result = value / 1e+6;
        } else if (to == "SquareMicroMeter") {
            result = value;
        }
    }
    
    const resultDiv = document.getElementById('resultDiv3');
    
    resultDiv.innerHTML = result;
    return result;
}

function volumeConverter() {
    var value = document.querySelector('#volumeConverterContainer .Text-value').value;
    var from = document.querySelector('#volumeConverterContainer .select-bar:nth-of-type(1)').value;
    var to = document.querySelector('#volumeConverterContainer .select-bar:nth-of-type(2)').value;
    var result;
    
    if (from == "CubicMeter") {
        if (to == "CubicMeter") {
            result = value;
        } else if (to == "CubicCentiMeter") {
            result = value * 1e+6;
        } else if (to == "CubicMilliMeter") {
            result = value * 1e+9;
        } else if (to == "Liter") {
            result = value * 1000;
        } else if (to == "MilliLiter") {
            result = value * 1e+6;
        }
    }
    
    if (from == "CubicCentiMeter") {
        if (to == "CubicMeter") {
            result = value / 1e+6;
        } else if (to == "CubicCentiMeter") {
            result = value;
        } else if (to == "CubicMilliMeter") {
            result = value * 1000;
        } else if (to == "Liter") {
            result = value / 1000;
        } else if (to == "MilliLiter") {
            result = value * 1000;
        }
    }
    
    if (from == "CubicMilliMeter") {
        if (to == "CubicMeter") {
            result = value / 1e+9;
        } else if (to == "CubicCentiMeter") {
            result = value / 1000;
        } else if (to == "CubicMilliMeter") {
            result = value;
        } else if (to == "Liter") {
            result = value / 1000000;
        } else if (to == "MilliLiter") {
            result = value;
        }
    }
    
    if (from == "Liter") {
        if (to == "CubicMeter") {
            result = value / 1000;
        } else if (to == "CubicCentiMeter") {
            result = value * 1000;
        } else if (to == "CubicMilliMeter") {
            result = value * 1000000;
        } else if (to == "Liter") {
            result = value;
        } else if (to == "MilliLiter") {
            result = value * 1000;
        }
    }
    
    if (from == "MilliLiter") {
        if (to == "CubicMeter") {
            result = value / 1e+6;
        } else if (to == "CubicCentiMeter") {
            result = value / 1000;
        } else if (to == "CubicMilliMeter") {
            result = value;
        } else if (to == "Liter") {
            result = value / 1000;
        } else if (to == "MilliLiter") {
            result = value;
        }
    }
    
    const resultDiv = document.getElementById('resultDiv4');
    
    resultDiv.innerHTML = result;
    return result;
}



function weightConverter(from, to, value) {
    var value = document.querySelector('#weightConverterContainer .Text-value').value;
    var from = document.querySelector('#weightConverterContainer .select-bar:nth-of-type(1)').value;
    var to = document.querySelector('#weightConverterContainer .select-bar:nth-of-type(2)').value;
     var result;
    
     value = parseFloat(value);

     if (from === "Kilogram") {
        if (to === "Kilogram") {
            result = value;
        } else if (to === "Gram") {
            result = value * 1000;
        } else if (to === "Miligram") {
            result = value * 1000000;
        } else if (to === "Pound") {
            result = value * 2.20462;
        } else if (to === "Metric Ton") {
            result = value * 0.001;
        } else if (to === "Short Ton") {
            result = value * 0.00110231;
        } else if (to === "Long Ton") {
            result = value * 0.000984207;
        }
    } else if (from === "Gram") {
        if (to === "Kilogram") {
            result = value / 1000;
        } else if (to === "Gram") {
            result = value;
        } else if (to === "Miligram") {
            result = value * 1000;
        } else if (to === "Pound") {
            result = value * 0.00220462;
        } else if (to === "Metric Ton") {
            result = value * 1e-6;
        } else if (to === "Short Ton") {
            result = value * 1.10231e-6;
        } else if (to === "Long Ton") {
            result = value * 9.8421e-7;
        }
    } else if (from === "Miligram") {
        if (to === "Kilogram") {
            result = value / 1000000;
        } else if (to === "Gram") {
            result = value / 1000;
        } else if (to === "Miligram") {
            result = value;
        } else if (to === "Pound") {
            result = value * 2.20462e-6;
        } else if (to === "Metric Ton") {
            result = value * 1e-9;
        } else if (to === "Short Ton") {
            result = value * 1.10231e-9;
        } else if (to === "Long Ton") {
            result = value * 9.8421e-10;
        }
    } else if (from === "Pound") {
        if (to === "Kilogram") {
            result = value * 0.453592;
        } else if (to === "Gram") {
            result = value * 453.592;
        } else if (to === "Miligram") {
            result = value * 453592;
        } else if (to === "Pound") {
            result = value;
        } else if (to === "Metric Ton") {
            result = value * 0.000453592;
        } else if (to === "Short Ton") {
            result = value * 0.0005;
        } else if (to === "Long Ton") {
            result = value * 0.000446429;
        }
    } else if (from === "Metric Ton") {
        if (to === "Kilogram") {
            result = value * 1000;
        } else if (to === "Gram") {
            result = value * 1e+6;
        } else if (to === "Miligram") {
            result = value * 1e+9;
        } else if (to === "Pound") {
            result = value * 2204.62;
        } else if (to === "Metric Ton") {
            result = value;
        } else if (to === "Short Ton") {
            result = value * 1.10231;
        } else if (to === "Long Ton") {
            result = value * 0.984207;
        }
    } else if (from === "Short Ton") {
        if (to === "Kilogram") {
            result = value * 907.185;
        } else if (to === "Gram") {
            result = value * 907185;
        } else if (to === "Miligram") {
            result = value * 907185000;
        } else if (to === "Pound") {
            result = value * 2000;
        } else if (to === "Metric Ton") {
            result = value * 0.907185;
        } else if (to === "Short Ton") {
            result = value;
        } else if (to === "Long Ton") {
            result = value * 0.892857;
        }
    } else if (from === "Long Ton") {
        if (to === "Kilogram") {
            result = value * 1016.05;
        } else if (to === "Gram") {
            result = value * 1016046;
        } else if (to === "Miligram") {
            result = value * 1.01605e+9;
        } else if (to === "Pound") {
            result = value * 2240;
        } else if (to === "Metric Ton") {
            result = value * 1.01605;
        } else if (to === "Short Ton") {
            result = value * 1.12;
        } else if (to === "Long Ton") {
            result = value;
        }
    }
const resultDiv = document.getElementById('resultDiv5');

resultDiv.innerHTML = result;
 return result


}





function timeConverter(from, to, value) {
    var value = document.querySelector('#timeConverterContainer .Text-value').value;
    var from = document.querySelector('#timeConverterContainer .select-bar:nth-of-type(1)').value;
    var to = document.querySelector('#timeConverterContainer .select-bar:nth-of-type(2)').value;
     var result;
    
     value = parseFloat(value);

    
        if (from === "Second") {
            if (to === "Second") {
                result = value;
            } else if (to === "Milisecond") {
                result = value * 1000;
            } else if (to === "Nanosecond") {
                result = value * 1e+9;
            } else if (to === "Picosecond") {
                result = value * 1e+12;
            } else if (to === "Minute") {
                result = value / 60;
            } else if (to === "Hour") {
                result = value / 3600;
            } else if (to === "Day") {
                result = value / 86400;
            } else if (to === "Week") {
                result = value / 604800;
            } else if (to === "Month") {
                result = value / 2.628e+6;
            } else if (to === "Year") {
                result = value / 3.154e+7;
            }
        } else if (from === "Milisecond") {
            if (to === "Second") {
                result = value / 1000;
            } else if (to === "Milisecond") {
                result = value;
            } else if (to === "Nanosecond") {
                result = value * 1e+6;
            } else if (to === "Picosecond") {
                result = value * 1e+9;
            } else if (to === "Minute") {
                result = value / 60000;
            } else if (to === "Hour") {
                result = value / 3.6e+6;
            } else if (to === "Day") {
                result = value / 8.64e+7;
            } else if (to === "Week") {
                result = value / 6.048e+8;
            } else if (to === "Month") {
                result = value / 2.628e+9;
            } else if (to === "Year") {
                result = value / 3.154e+10;
            }
        } else if (from === "Nanosecond") {
            if (to === "Second") {
                result = value / 1e+9;
            } else if (to === "Milisecond") {
                result = value / 1e+6;
            } else if (to === "Nanosecond") {
                result = value;
            } else if (to === "Picosecond") {
                result = value * 1000;
            } else if (to === "Minute") {
                result = value / 6e+10;
            } else if (to === "Hour") {
                result = value / 3.6e+12;
            } else if (to === "Day") {
                result = value / 8.64e+13;
            } else if (to === "Week") {
                result = value / 6.048e+14;
            } else if (to === "Month") {
                result = value / 2.628e+15;
            } else if (to === "Year") {
                result = value / 3.154e+16;
            }
        } else if (from === "Picosecond") {
            if (to === "Second") {
                result = value / 1e+12;
            } else if (to === "Milisecond") {
                result = value / 1e+9;
            } else if (to === "Nanosecond") {
                result = value / 1000;
            } else if (to === "Picosecond") {
                result = value;
            } else if (to === "Minute") {
                result = value / 6e+13;
            } else if (to === "Hour") {
                result = value / 3.6e+15;
            } else if (to === "Day") {
                result = value / 8.64e+16;
            } else if (to === "Week") {
                result = value / 6.048e+17;
            } else if (to === "Month") {
                result = value / 2.628e+18;
            } else if (to === "Year") {
                result = value / 3.154e+19;
            }
        } else if (from === "Minute") {
            if (to === "Second") {
                result = value * 60;
            } else if (to === "Milisecond") {
                result = value * 60000;
            } else if (to === "Nanosecond") {
                result = value * 6e+10;
            } else if (to === "Picosecond") {
                result = value * 6e+13;
            } else if (to === "Minute") {
                result = value;
            } else if (to === "Hour") {
                result = value / 60;
            } else if (to === "Day") {
                result = value / 1440;
            } else if (to === "Week") {
                result = value / 10080;
            } else if (to === "Month") {
                result = value / 43800;
            } else if (to === "Year") {
                result = value / 525600;
            }
        } else if (from === "Hour") {
            if (to === "Second") {
                result = value * 3600;
            } else if (to === "Milisecond") {
                result = value * 3.6e+6;
            } else if (to === "Nanosecond") {
                result = value * 3.6e+12;
            } else if (to === "Picosecond") {
                result = value * 3.6e+15;
            } else if (to === "Minute") {
                result = value * 60;
            } else if (to === "Hour") {
                result = value;
            } else if (to === "Day") {
                result = value / 24;
            } else if (to === "Week") {
                result = value / 168;
            } else if (to === "Month") {
                result = value / 730;
            } else if (to === "Year") {
                result = value / 8760;
            }
        } else if (from === "Day") {
            if (to === "Second") {
                result = value * 86400;
            } else if (to === "Milisecond") {
                result = value * 8.64e+7;
            } else if (to === "Nanosecond") {
                result = value * 8.64e+13;
            } else if (to === "Picosecond") {
                result = value * 8.64e+16;
            } else if (to === "Minute") {
                result = value * 1440;
            } else if (to === "Hour") {
                result = value * 24;
            } else if (to === "Day") {
                result = value;
            } else if (to === "Week") {
                result = value / 7;
            } else if (to === "Month") {
                result = value / 30.417;
            } else if (to === "Year") {
                result = value / 365;
            }
        } else if (from === "Week") {
            if (to === "Second") {
                result = value * 604800;
            } else if (to === "Milisecond") {
                result = value * 6.048e+8;
            } else if (to === "Nanosecond") {
                result = value * 6.048e+14;
            } else if (to === "Picosecond") {
                result = value * 6.048e+17;
            } else if (to === "Minute") {
                result = value * 10080;
            } else if (to === "Hour") {
                result = value * 168;
            } else if (to === "Day") {
                result = value * 7;
            } else if (to === "Week") {
                result = value;
            } else if (to === "Month") {
                result = value / 4.345;
            } else if (to === "Year") {
                result = value / 52.143;
            }
        } else if (from === "Month") {
            if (to === "Second") {
                result = value * 2.628e+6;
            } else if (to === "Milisecond") {
                result = value * 2.628e+9;
            } else if (to === "Nanosecond") {
                result = value * 2.628e+15;
            } else if (to === "Picosecond") {
                result = value * 2.628e+18;
            } else if (to === "Minute") {
                result = value * 43800;
            } else if (to === "Hour") {
                result = value * 730;
            } else if (to === "Day") {
                result = value * 30.417;
            } else if (to === "Week") {
                result = value * 4.345;
            } else if (to === "Month") {
                result = value;
            } else if (to === "Year") {
                result = value / 12;
            }
        } else if (from === "Year") {
            if (to === "Second") {
                result = value * 3.154e+7;
            } else if (to === "Milisecond") {
                result = value * 3.154e+10;
            } else if (to === "Nanosecond") {
                result = value * 3.154e+16;
            } else if (to === "Picosecond") {
                result = value * 3.154e+19;
            } else if (to === "Minute") {
                result = value * 525600;
            } else if (to === "Hour") {
                result = value * 8760;
            } else if (to === "Day") {
                result = value * 365;
            } else if (to === "Week") {
                result = value * 52.143;
            } else if (to === "Month") {
                result = value *12;
            }
            else if (to === "Year") {
                result = value;
            } 
        
        }
        const resultDiv = document.getElementById('resultDiv6');
        
        resultDiv.innerHTML = result;

        return result
    }

   