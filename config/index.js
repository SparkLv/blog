const ip = "";

const path = {

}

let combine = new Object();

for (let item in path) {
    combine[item] = ip + path[item];
}

export default combine