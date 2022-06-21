package com.example.learningStrings.practice;

public class practiceString {
    public static void main(String[] args) {
        String str = "Learn String Handling.";
        String allUpper = "LEARN STRING HANDLING";
        boolean isTrue = false;

        char ch1 = str.charAt(0);
        char ch2 = str.charAt(1);
        char ch3 = str.charAt(4);

        if(str.equalsIgnoreCase(allUpper)) {
            isTrue = true;
        }else {
            isTrue = false;
        }

        System.out.println("The character at 0 index is: " + ch1);
        System.out.println("The character at 1 index is: " + ch2);
        System.out.println("The character at 4 index is: " + ch3);

        System.out.println("Are str and allUpper equal: " + isTrue);

        // 1) Using the string "Learn string handling": what index is the last letter in the string?
        System.out.println("The last index in the string str is: " + (str.length()-1));

        // 2) Using the same string as above, what character is located at the 10th index?
        System.out.println("The character located at the 10th index is: " + str.toCharArray()[10]);

        // 3)Do a check to see if the character at index 10 and 15 the same?
        System.out.println("Is character at index 10 and 15 the same: " + (str.toCharArray()[10] == str.toCharArray()[15]));

        // 4) Create a scenario that returns false if the character at the 0 index equals the 5 index
        System.out.println("Scenario created to return false if character at 0 index equals the 5 index: " + !(str.toCharArray()[0] == str.toCharArray()[5]));

        //length()
        //equals()
        //equalsIgnoreCase()
        //charAt()
        //contains()
        //substring()
        //startsWith
        //endsWith
        //toLowerCase()
        //toUpperCase()
    }
}

