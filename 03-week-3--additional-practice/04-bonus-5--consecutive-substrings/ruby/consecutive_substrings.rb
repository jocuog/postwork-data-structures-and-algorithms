def consecutive_substrings(string)
  # type your code in here

  subs = []   # create a variable with an empty array to store substrings

  string.split('').each_with_index do |char, idx|   # split string into an array and iterate over each element and get the index
    subs << char  # shovel each charachter into the array
    fragment = char   # create a variable to store each character

    string[idx + 1..-1].split('').each_with_index do |letter|   # split the string into array from index 1 to second to last element. Iterate and get each letter
      fragment += letter  # add the letter to the fragment 
      subs << fragment
    end
  end

  subs

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']"
  print "=> " 
  print consecutive_substrings('abc')

  puts

  puts "Expecting: ['a']"
  print "=> " 
  print consecutive_substrings('a')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
