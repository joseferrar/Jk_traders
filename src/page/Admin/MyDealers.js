import React, { useState, useEffect } from 'react'
import { auth, db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

function MyDealers() {
    const [subCollectionData, setSubCollectionData] = useState([]);
    console.log('authentication', auth.currentUser.uid);

    const fetchBirthdayPosts = async () => {
        try {
            const userUid = auth.currentUser?.uid;
            if (!userUid) {
                console.log("User is not authenticated.");
                return;
            }

            // Reference to the nested collection
            const birthdayCollectionRef = collection(
                db,
                "deals"
            );

            // Fetch documents
            const snapshot = await getDocs(birthdayCollectionRef);

            // Parse documents
            const birthdayPosts = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setSubCollectionData(birthdayPosts)
            console.log("Birthday posts:", birthdayPosts);
        } catch (error) {
            console.error("Error fetching birthday posts:", error);
        }
    };

    useEffect(() => {
        fetchBirthdayPosts()
    }, []);

    return (
        <div>
            <div class="container-fluid">
                <div class="container py-5">
                    <div className="d-flex justify-content-between">
                        <h1 class="mb-3">My Dealers</h1>
                        <small class="text-white my-4">
                            <a href="#" onClick={fetchBirthdayPosts}><i class="fa-solid fa-rotate-right me-1 nav-header-icon" style={{ fontSize: 20 }}></i></a>
                        </small>
                    </div>
                    <table class="table">
                        <thead className='table-dark'>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Mobile No</th>
                                <th scope="col">Aadhar No</th>
                                <th scope="col">Address</th>
                                <th scope="col">GST No</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subCollectionData && subCollectionData.map((item, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{item?.name}</td>
                                    <td>{item?.mobile}</td>
                                    <td>{item?.aathar}</td>
                                    <td>{item?.address}</td>
                                    <td>{item?.gst}</td>
                                    <td>{item?.apDate}</td>
                                    <td>{item?.apTime}</td>
                                    <td>
                                        <small class="me-3 text-white">
                                            <a href="#"><i class="fa-solid fa-eye me-1 nav-header-icon"></i></a>
                                        </small>
                                        <small class="me-1 text-white">
                                            <a href="#"><i class="fa-solid fa-trash me-1 nav-header-icon"></i></a>
                                        </small>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default MyDealers