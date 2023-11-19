/*
#!name=一木记账
#!desc=一木记账解锁会员
#!homepage=https://yfamily.ml
#!author= I-am-R-E
#!icon=https://raw.githubusercontent.com/deezertidal/private/main/icons/ymjz.png

[rewrite_local]
^https?:\/\/yimuapp\.com(:8082)?\/bookkeeping\/user\/getUser\/ url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/YiMuJiZhang.js
[mitm]
hostname = yimuapp.com

*/
let body = $response.body;
let obj = JSON.parse(body);

// VIP规则

obj["result"]["vipType"] = 1;
obj["result"]["vipTime"] = 3900000000000;
$done({body: JSON.stringify(obj)});
