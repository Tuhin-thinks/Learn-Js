function addStyle() {
    var prefix = "btn";
    var search_id;
    for (let i = 1; i < 10; i++) {
      search_id = prefix + i.toString();
      document.getElementById(search_id).style = "width: 30%;height: 48px;font-size:24px;";
    }
  }
function rotate(arr){
    arr.unshift(arr.pop());
  return arr;
}
  function rotateDigits() {
    var prefix = "btn";
    var search_id, btn_text;
    var btn;
    var previous_config = [];
    [1,2,3,6,9,8,7,4].forEach(function(i){
      if (i !== 5) {
        search_id = prefix + i.toString();
        btn = document.getElementById(search_id);
        previous_config.push(btn.innerHTML);
      }
    })
    
    var config_now = rotate(previous_config);
    var count = 0;
    
    [1,2,3,6,9,8,7,4].forEach(function(i){
      if (i !== 5) {
        search_id = prefix + i.toString();
        btn = document.getElementById(search_id);
        btn.innerHTML = config_now[count++];
      }
    })
  }
  addStyle();
