def find_first_duplicate(arr)
  # type your code in here

  valueSet = Set.new # create a new value Hash Set

  arr.each do |value| #iterate through values
    return if valueSet.include?(value) # check value set includes value, if it does return vlaue

    valueSet.add(value) # add the value to the value set
  end

  -1
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
