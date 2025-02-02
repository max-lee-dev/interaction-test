import {College} from "@/app/utils/types";

export const mockColleges: College[] = [
  {
    name: "Harvard University",
    location: "Cambridge, MA",
    rank: 1,
    acceptanceRate: 4.6,
    tuition: 53856,
    checked: false,
  },
  {
    name: "Stanford University",
    location: "Stanford, CA",
    rank: 2,
    acceptanceRate: 4.3,
    tuition: 56856,
    checked: false,
  },
  {
    name: "Massachusetts Institute of Technology (MIT)",
    location: "Cambridge, MA",
    rank: 3,
    acceptanceRate: 4.1,
    tuition: 53756,
    checked: true,
  },
  {
    name: "California Institute of Technology (Caltech)",
    location: "Pasadena, CA",
    rank: 4,
    acceptanceRate: 4.9,
    tuition: 56156,
    checked: false,
  },
  {
    name: "University of Chicago",
    location: "Chicago, IL",
    rank: 5,
    acceptanceRate: 6.2,
    tuition: 60156,
    checked: false,
  },
  {
    name: "Columbia University",
    location: "New York, NY",
    rank: 6,
    acceptanceRate: 3.9,
    tuition: 63456,
    checked: true,
  },
  {
    name: "Yale University",
    location: "New Haven, CT",
    rank: 7,
    acceptanceRate: 4.5,
    tuition: 61556,
    checked: false,
  },
  {
    name: "Princeton University",
    location: "Princeton, NJ",
    rank: 8,
    acceptanceRate: 4.0,
    tuition: 60956,
    checked: false,
  },
  {
    name: "University of Pennsylvania",
    location: "Philadelphia, PA",
    rank: 9,
    acceptanceRate: 4.5,
    tuition: 61456,
    checked: false,
  },
]

export const mockEmails = [
  {
    content: "Carnegie Mellon Uni. Reminder: Take Action in My Student Aid\n" +
      "Dear Max,\n" +
      "\n" +
      "You still have an item that requires your attention in My Student Aid (MSA). Log in to MSA",
  },
  {
    content: "Binghamton Univ. Your FAFSA has been received\n Dear Max,\n" +
      "\n" +
      "Binghamton University has received your 2025-26 FAFSA. Thank you!\n" +
      "\n" +
      "This will allow us to review your eligibility for several types of federal financial aid including grants, work-study and student loans."
  }

]