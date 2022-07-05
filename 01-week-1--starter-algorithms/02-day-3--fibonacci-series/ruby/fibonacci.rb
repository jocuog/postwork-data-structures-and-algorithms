def fibonacci(num)
  # type your code in here
  
  # set a variable to an array containing the starting values of a fibonacci series
  last_two = [0, 1]

  # if num is less than two then the return value is the value of num
  return last_two[num] if num < 2

  # loop num times minus 1 (becuase array starts at 0)
  (num -1).times do 
    # create a variable to store the added values of indeces 0 and 1 
    sum = last_two[0] + last_two[1]
    # add the sum created above to the last index in the last_two varibale
    last_two = [last_two[1], sum]
  end
  # return the last element of the array in the last_two varibale
  last_two.last
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
