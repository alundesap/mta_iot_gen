$.response.contentType = "text/html";
var body = "";

body += "<html>\n";
body += "<head>\n";
body += "\n";
body += "<script>\n";
body += "\n";
body += "\n";
body += "function randomIntFromInterval(min,max)\n";
body += "{\n";
body += "    return Math.floor(Math.random()*(max-min+1)+min);\n";
body += "}\n";
body += "var request_output = \"\";\n";
body += "\n";
body += "var xhr = new XMLHttpRequest();\n";
body += "xhr.open('POST', 'sensors.xsodata/temp/?$select=tempVal,ts,created');\n";
body += "request_output += \"POST to sensors.xsodata/temp \\n\";\n";
body += "xhr.setRequestHeader('Content-Type', 'application/json');\n";
body += "request_output += \"Request Header: Content-Type = application/json \\n\";\n";
body += "xhr.setRequestHeader('Accept', 'application/json');\n";
body += "request_output += \"Request Header: Accept = application/json \\n\";\n";
body += "\n";
body += "request_output += \"\\n\";\n";
body += "request_output += \"Request Body: \\n\";\n";
body += "\n";
body += "function dumpResponseHeaders(xhr_obj) {\n";
body += "    var hdr_out = \"\";\n";
body += "    hdr_out += \"Response Headers\\n\";\n";
body += "    hdr_out += \"\\n\";\n";
body += "    var headers = xhr_obj.getAllResponseHeaders();\n";
body += "    return (hdr_out + headers + \"\\n\");\n";
body += "}\n";
body += "xhr.onload = function() {\n";
body += "    if (xhr.status === 201) {\n";
body += "        document.getElementById(\"response_content\").innerHTML = \"<pre>\\n\" + dumpResponseHeaders(xhr) + \"Response Body: \\n\" + JSON.stringify(JSON.parse(xhr.responseText), null, 2) + \"</pre>\\n\";\n";
body += "    }\n";
body += "    else {\n";
body += "        alert(\"Yipe!  Got status \" + xhr.status + \" : \" + xhr.statusText + \" ::\\n \" + JSON.parse(xhr.responseText).error.message.value + \" \\n:: expected 201.\");\n";
body += "    }\n";
body += "};\n";
body += "\n";
body += "var request_obj = \n";
body += "{\n";
body += "    \"tempId\": 0,\n";
body += "    \"tempVal\": randomIntFromInterval(70,110),\n";
body += "    \"ts\": \"/Date(\" + (new Date()).getTime() +  \")/\",\n";
body += "    \"created\": \"/Date(1234567890123)/\"\n";
body += "};\n";
body += "\n";
body += "</script>\n";
body += "\n";
body += "</head>\n";
body += "<body>\n";
body += "<p>===Begin Request===</p>\n";
body += "<div id=\"request_content\">\n";
body += "No request sent yet.    \n";
body += "</div>\n";
body += "<p>===End Request===</p>\n";
body += "<p>===Begin Response===</p>\n";
body += "<div id=\"response_content\">\n";
body += "No results returned yet.    \n";
body += "</div>\n";
body += "<p>===End Response===</p>\n";
body += "\n";
body += "<script>\n";
body += "// Display the request\n";
body += "document.getElementById(\"request_content\").innerHTML = \"<pre>\\n\" + request_output + \"\\n\" + JSON.stringify(request_obj, null, 2) + \"</pre>\\n\";\n";
body += "\n";
body += "// Send the Ajax Request.\n";
body += "xhr.send(JSON.stringify(request_obj));\n";
body += "</script>\n";
body += "\n";

body += "</body>\n";
body += "</html>\n";

$.response.setBody(body);
