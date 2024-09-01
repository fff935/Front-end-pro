class CoachStat {
  constructor(name, specialization, rating) {
    this.name = name;
    this.specialization = specialization;
    this.rating = rating;
  }

  coachInfo() {
    console.log(`Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`);
  }
}

const coach1 = new CoachStat("John Doe", "Fitness", 4.7);
const coach2 = new CoachStat("Alice Smith", "Yoga", 4.9);

coach1.coachInfo();
coach2.coachInfo();
