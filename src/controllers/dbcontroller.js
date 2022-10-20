
import {db} from './firebase'
import { ui } from './UiController';


class Dbcontroller{




    saveDoc(uid, amount, category, from, type){

        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currentDate = `${day}-${month}-${year}`;
        
        let random = (Math.floor(Math.random() * 10000)).toString()
        db
            .collection('users')
            .doc(uid)
            .collection('expenses')
            .doc(random)
            .set({
                amount: amount,
                date: currentDate,
                category: category,
                from: from,
                type: type
            })
            .catch(e => {
                console.log(e);
            })
    }


    getDoc(uid){
        let data = []
        db.collection('users')
            .doc(uid)
            .collection('expenses')
            .get()
            .then(querySnapShot => {
                querySnapShot.docs.forEach(doc => {
                    data.push(doc.data())
                });
                ui.setTable(data)
            })
    }



}

export const database = new Dbcontroller()
