class Exercise5 {
  public static void main(String[] args) {
   int[] myArray = {1,2,2,5,4,6,7,8,8,8};
   System.out.println(occurrenceFollowed(myArray));
  }

  private static String occurrenceFollowed(int[] array){
      int number = 0;
      int ocurrence = 0;
      int ocurrenceTemp = 0;
      for(int i = 0; i < array.length -1 ; i++){         
          if(array[i+1]== array[i]){
            ocurrenceTemp++;
            if(array.length-1 == i + 1){
              ocurrenceTemp++;
              if(ocurrenceTemp > ocurrence){
                ocurrence = ocurrenceTemp;
                number = array[i];
              }
            }
          }else{
            ocurrenceTemp++;
            if(ocurrenceTemp > ocurrence){
              ocurrence = ocurrenceTemp;
              number = array[i]; 
            }
            ocurrenceTemp = 0;
          }
      }
      return "Ocurrencias:" + ocurrence + "\nNúmero:" + number;
  } 
}