Array.prototype.remove_ = function(integer_list, values_list){
  let copy = [...integer_list];
  
  let result = copy.filter(x => 
    !(values_list.includes(x)))
  
  return result
}
