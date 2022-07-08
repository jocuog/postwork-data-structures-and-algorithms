def recursive_count(num = 0)
  # type your code in here
  return num if num > 0

  recursive_count(num + 1)
end


def talk_to_myself(n)
  return puts'done' if n <= 0.5

  talk_to_myself(n/2)
  'the sheep goes baah'
end




if __FILE__ == $PROGRAM_NAME
  recursive_count

  puts "Expecting: '0,1,2,3,4,5,6,7,8,9'"
  puts '=>', recursive_count(9)

  # puts "=>", talk_to_myself(4)
end

# OPTIONAL
# Please add your pseudocode to this file
# And a written explanation of your solution
