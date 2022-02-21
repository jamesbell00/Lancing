const API= 'http://localhost:3000/freelancers' //for ios connection
//const API= 'http://10.0.2.2:3000/freelancers' // for android connection

//Freelancer Queries

export const getFreelancers = async() => {
    
    const res = await fetch(API);
    return await res.json();
    
}

export const getFreelancersById = async(id) => {
    const res = await fetch(`${API}/${id}`);
    return await res.json();
}

export const insertFreelancer= async(newFreelancer) => {
    const res =await fetch(API,{
        method: 'POST', 
        headers: {Accept: 'application/json', "Content-Type": "application/json"},
        body: JSON.stringify(newFreelancer)
});
return await res.json();
};

export const deleteFreelancer= async(id) => {
    await fetch(`${API}/${id}`,{
        method: 'DELETE',
    })
};

export const updateFreelancer= async(id, newFreelancer) => {
    const res = await fetch(`${API}/${id}`,{
        method: 'PUT',
        headers: {Accept: 'application/json', "Content-Type": "application/json"},
        body: JSON.stringify(newFreelancer)

    })
    return res;
}

//Job Application Queries