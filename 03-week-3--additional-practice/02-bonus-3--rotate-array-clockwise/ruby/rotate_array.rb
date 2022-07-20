def rotate_array(arr, k)
  # type your code in here
  return arr if arr.empty? || k.zero?

  rotations = k % arr.length
  removed = arr.slice!(arr.length - rotations, rotations)
  removed + arr

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [4, 1, 2, 3]"
  print "=> "
  print rotate_array([1, 2, 3, 4], 1)

  puts

  puts "Expecting: [2, 3, 1]"
  print "=> "
  print rotate_array([1, 2, 3], 2)

  puts

  puts "Expecting: [1, 2, 3]"
  print "=> "
  print rotate_array([1, 2, 3], 3)

  puts

  puts "Expecting: [1, 2, 3]"
  print rotate_array([1, 2, 3], 0)

  puts

  puts "Expecting: [2, 3, 1]"
  print rotate_array([1, 2, 3], 5)

  puts

  puts "Expecting: []"
  print rotate_array([], 7)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
