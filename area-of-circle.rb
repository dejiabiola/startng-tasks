def circleArea(radius)
  # Multiply PI by the squared radius of the circle
  area = Math::PI * radius**2
  puts ("The area of the circle is " + area.round(2).to_s)
end


# Get desired radius as input from the user and call circleArea passing in the radius
puts "Please enter a radius: "
radius = gets.chomp()
circleArea(radius.to_f)