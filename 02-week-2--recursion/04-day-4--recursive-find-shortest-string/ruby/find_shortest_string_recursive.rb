def find_shortest_string_recursive(arr)
  # type your code in here
  return arr.first if arr.length == 1

  result = find_shortest_string_recursive(arr[1..-1])

  arr.first.length <= result.length ? result : result
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string_recursive(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string_recursive(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string_recursive(['flower', 'juniper', 'lily', 'dandelion'])

  puts("Expecting: 'cat'");
  puts("=>", find_shortest_string_recursive(['cat']))

  puts

  puts("Expecting: 'e'");
  puts("=>", find_shortest_string_recursive(['e','tt','ada','dasfs','ff']))

  puts

  puts("Expecting: 'cat'");
  puts("=>", find_shortest_string_recursive(['cat', 'lamb', 'elephant', 'ship']))

  puts

  puts("Expecting: 'ee'");
  puts("=>", find_shortest_string_recursive(['ee', 'eeee','eeeeee','eeeeeee']))

  puts

  puts("Expecting: ''");
  puts("=>", find_shortest_string_recursive(['','ds','adsf','ddda','as']))

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
