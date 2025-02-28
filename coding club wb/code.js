const Scanner = require('readline-sync');

<<<<<<< Tabnine <<<<<<<
public class CodingClub {//-
class CodingClub {//+
>>>>>>> Tabnine >>>>>>>// {"conversationId":"7b02dcd2-bf17-4206-9fa1-de696d1b2423","source":"instruct"}
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean exit = false;

        while (!exit) {
            System.out.println("Welcome to the Coding Club!");
            System.out.println("1. About Us");
            System.out.println("2. Upcoming Events");
            System.out.println("3. Projects");
            System.out.println("4. Contact Us");
            System.out.println("5. Exit");
            System.out.print("Please choose an option: ");

            int choice = scanner.nextInt();
            scanner.nextLine();  // Consume newline

            switch (choice) {
                case 1:
                    System.out.println("\nAbout Us");
                    System.out.println("Welcome to the Coding Club. Our mission is to inspire and nurture the next generation of coders.\n");
                    break;
                case 2:
                    System.out.println("\nUpcoming Events");
                    System.out.println("Stay tuned for upcoming events and meetups.\n");
                    break;
                case 3:
                    System.out.println("\nProjects");
                    System.out.println("Check out some of the exciting projects our members have been working on.\n");
                    break;
                case 4:
                    System.out.println("\nContact Us");
                    System.out.println("Feel free to reach out to us at info@codingclub.com.\n");
                    break;
                case 5:
                    System.out.println("Exiting the program...");
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid option. Please try again.");
            }
        }

        scanner.close();
    }
}
