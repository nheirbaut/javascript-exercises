const findTheOldest = function(people) {
    const getAge = function(person) {
        if (person.yearOfDeath == undefined) {
            return (new Date()).getFullYear() - person.yearOfBirth;
        }

        return person.yearOfDeath - person.yearOfBirth;
    }

    const sortedByAge = people
        .sort((person1, person2) => {
            const age1 = getAge(person1);
            const age2 = getAge(person2);

            return age1 > age2 ? -1 : 1;
        });

    return sortedByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
