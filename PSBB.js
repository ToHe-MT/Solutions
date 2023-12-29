function PSBB(familyNumber, members) {
    //Pendekatan lebih baik menggunakan TS (familyNumber:Number, members: number[])
    if (typeof familyNumber != "number") {
        console.log("familyNumber should be a number");
        return;
    }
    if (!Array.isArray(members)) {
        console.log("members should be an array of number");
        return;
    } else if (Array.isArray(members)) {
        if (members.length != familyNumber) {
            console.log("Input must be equal with count of family");
            return;
        }
    }

    members.sort().reverse();
    let count = 0;
    let firstPointer = 0;
    let lastPointer = members.length - 1;

    while (firstPointer <= lastPointer) {
        if (members[firstPointer] > 4) {
            console.log(
                "Family to BIG, Bus can't take more than 4, and Family Should Ride in the Same bus"
            );
            return;
        }
        if (members[firstPointer] === 4) {
            firstPointer++;
            count++;
        } else if (members[firstPointer] < 4) {
            const total = members[firstPointer] + members[lastPointer];
            if (total > 4) {
                firstPointer++;
                count++;
            } else if (total === 4) {
                firstPointer++;
                lastPointer--;
                count++;
            } else if (total < 4) {
                firstPointer++;
                lastPointer--;
                count++;
            }
        }
    }
    console.log("Minimum bus Required: ", count);
}

PSBB(5, [1, 2, 4, 3, 3]);
PSBB(8, [2, 3, 3, 4, 2, 1, 3, 1]);
PSBB(5, [1, 5]);
