import axios from "axios";
import { filterSubjects } from "../helper/helper";

export const fetchFiteredSubjects = async () => {
    const url = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clwhpoj1e000r08uhdbyokdmq/master";
    const query = `
                query {
                    subjects (first: 1000) {
                        id
                    
            course
            sp
            hours
            periode
            major
                        
                        
                    }
                }
            `;
    try {
        const response = await axios.post(url, { query });
       const data = filterSubjects(response.data.data.subjects);
       return data
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const fetchSubjects = async () => {
    const url = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clwhpoj1e000r08uhdbyokdmq/master";
    const query = `
                query {
                    subjects (first: 1000) {
                        id
                    
            course
            sp
            hours
            periode
            major
                        
                        
                    }
                }
            `;
    try {
        const response = await axios.post(url, { query });
        return response.data.data.subjects;
    } catch (error) {
        console.log(error);
        return null;
    }
};
