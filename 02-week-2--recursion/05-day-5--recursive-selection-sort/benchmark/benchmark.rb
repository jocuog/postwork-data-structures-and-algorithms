# Paste your iterative and recursive solutions in this file
# And then calculate their average run times to compare them.
def selection_sort_recursive(arr)
  # type your code in here
  return [] if arr.empty?

  min = arr.min
  idx = arr.index(min)

  arr.delete_at(idx)

  result = selection_sort_recursive(arr)
  result.unshift(min)

end

def selection_sort(arr)
  sorted = []

  until arr.length == 0
    min = arr.min
    idx = arr.index(min)
    sorted << min
    arr.delete_at(idx)
  end

  sorted
end

def benchmark
  start_time = Time.now

  1000.times do 
    yield
  end

  (Time.now - start_time) / 1000
end

puts "iterative: #{benchmark { selection_sort([5, 8, 1, 0, -7])}}"
puts "recursive: #{benchmark { selection_sort_recursive([5, 8, 1, 0, -7])}}"

