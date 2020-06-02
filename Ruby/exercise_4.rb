#Luis Badilla

myArray = [1,2,1,3,3,1,2,1,5,1]

def histogram(myArray)
  arrayTemp = Array.new(5){0}
  myArray.each do |number|
     arrayTemp[number - 1] = 1 + arrayTemp[number - 1]
  end
  stringHistogram = ""
  i = 1
  arrayTemp.each do |number|
    stringHistogram = stringHistogram + i.to_s + ":"
    number.times do 
    stringHistogram = stringHistogram + "*"
    end
    stringHistogram = stringHistogram + "\r\n"
    i = i + 1
  end
  stringHistogram
end

puts histogram(myArray)

