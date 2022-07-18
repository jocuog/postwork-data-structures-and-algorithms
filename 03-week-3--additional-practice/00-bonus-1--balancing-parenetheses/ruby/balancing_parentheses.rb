def balancing_parentheses(string)
  # type your code in here

  parathesesO = 0
  parathesesC = 0

  string.chars.each do |char|
    if char == '('
      parathesesO += 1
      next
    end
    
    if parathesesO > 0 
      parathesesO -= 1 
    else
      parathesesC += 1
    end
  end
  parathesesC + parathesesO
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts balancing_parentheses('(()())')

  puts

  puts "Expecting: 2"
  puts balancing_parentheses('()))')

  puts

  puts "Expecting: 1"
  puts balancing_parentheses(')')

  puts

  puts "Expecting: 0"
  puts balancing_parentheses('()')

  puts

  puts "Expecting: 1"
  puts balancing_parentheses('(')

  puts

  puts "Expecting: 2"
  puts balancing_parentheses(')(')

  puts

  puts "Expecting: 1"
  puts balancing_parentheses(')()')

  puts

  puts "Expecting: 2"
  puts balancing_parentheses(')((((()))((())))()(()))(')

  puts

  puts "Expecting: 3"
  puts balancing_parentheses(')))')

  puts

  puts "Expecting: 3"
  puts balancing_parentheses('(((')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
