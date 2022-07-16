def selection_sort_recursive(arr)
  # type your code in here
  return [] if arr.empty?

  min = arr.min
  idx = arr.index(min)

  arr.delete_at(idx)

  result = selection_sort_recursive(arr)
  result.unshift(min)

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort_recursive([4, 3, 1, 5, 2])

  puts

  puts "Expecting: [1, 2, 3, 4, 5]"
  print "=> "
  print selection_sort_recursive([3, -1, 5, 2])

  puts

  puts "Expecting: [0, 2, 3 , 5, 6, 7, 8]"
  print "=> "
  print selection_sort_recursive([8, 7, 6, 3, 0, 5, 2])

  puts

  puts "Expecting: [-10, 20, 38, 55]"
  print "=> "
  print selection_sort_recursive([38, -10, 55, 20])


  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
