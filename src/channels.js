import Link from "next/link";
import React, { useRef, useState } from "react";
import Image from "next/image";


export default function Channels(props) {

    return (
        <>
            <div className="card">
                <div className="card-img-top">
                    <Image
                        priority
                        src={props.coverImg}
                        layout="responsive"
                        height={325}
                        width={625}
                        alt="user"
                    />
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-start align-items-start">
                        <Image
                            priority
                            src={props.avatar}
                            className="avatar"
                            height={48}
                            width={48}
                            alt="user"
                        />
                        <div className="ms-2 col-9">
                            <h6>{props.title}</h6>
                            <p className="text-small">{props.name} <br /> <span>{props.category}</span> </p>
                            <span className="badge bg-secondary">{props.language}</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
        
        
    );
}
