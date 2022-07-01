def reverse_string(str)
  # type your code in here
  # use .chars method to turn string into an array
  # use the .reduce mthod which will reduce each element of an enumerable into a single value
  # reverse and concat x and y variables

  str.chars.reduce { |x,y| y + x }

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts "Expecting: 'nhoJ olleH'"
  puts "=>", reverse_string('Hello John')

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution