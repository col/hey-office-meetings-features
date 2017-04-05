Feature: Book meeting room at a set time today

  Scenario: Specify start time
    When I say "Book me a meeting room for 8pm"
    Then I receive "Ok, I've booked Amoy for you from 8pm today"
    And a calendar event with the following details should be created
      | Title         | Start | End   | Room |
      | Booked by Col | 20:00 | 21:00 | Amoy |

  Scenario: Specify number of people and start time
    When I say "Book me a meeting room for 6 people from 8pm"
    Then I receive "Ok, I've booked Amoy for you from 8pm today"
    And a calendar event with the following details should be created
      | Title         | Start | End   | Room |
      | Booked by Col | 20:00 | 21:00 | Amoy |

  Scenario: Specify capability and start time
    When I say "Book me a meeting for a video conference at 8pm"
    Then I receive "Ok, I've booked Amoy for you from 8pm today"
    And a calendar event with the following details should be created
      | Title         | Start | End   | Room |
      | Booked by Col | 20:00 | 21:00 | Amoy |

  Scenario: Specify duration and start time
    When I say "Book me a meeting from 8pm for 2 hours"
    Then I receive "Ok, I've booked Amoy for you from 8-9pm today"
    And a calendar event with the following details should be created
      | Title         | Start | End   | Room |
      | Booked by Col | 20:00 | 22:00 | Amoy |

  Scenario: Specify start time and end time
    When I say "Book me a meeting from 8pm 11pm"
    Then I receive "Ok, I've booked Amoy for you from 8-11pm today"
    And a calendar event with the following details should be created
      | Title         | Start | End   | Room |
      | Booked by Col | 20:00 | 23:00 | Amoy |
