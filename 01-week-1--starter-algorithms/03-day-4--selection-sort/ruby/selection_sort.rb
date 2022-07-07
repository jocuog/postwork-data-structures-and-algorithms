def selection_sort(arr)
  # type your code in here
  sorted = []

  until arr.length == 0
    min = arr.min
    idx = arr.index(min)
    sorted << min
    arr.delete_at(idx)
  end

  sorted

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts

  puts "Expecting: []"
  print selection_sort([])

  puts

  puts "Expecting: [-1]"
  print selection_sort([-1])

  puts

  puts "Expecting: [-10, 2, 2, 3, 7]"
  print selection_sort([3, 2, 2, 7, -10])

  puts

  puts "Expecting: [100, 200]"
  print selection_sort([100, 200])


  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }

  start_time = Time.now

  1000.times do
    selection_sort([2, 1])
    selection_sort(long_input)
  end

  avg_time = (Time.now - start_time) / 2000
  puts avg_time

end

# Please add your pseudocode to this file
# And a written explanation of your solution
