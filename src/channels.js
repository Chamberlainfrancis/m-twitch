import Image from "next/image";

export default function Channels(props) {

    return (
        <div className="card shadow-sm">
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
                <div className="d-flex align-items-start">
                    <Image
                        priority
                        src={props.avatar}
                        className="avatar"
                        height={48}
                        width={48}
                        alt="user"
                    />
                    <div className="card-body p-0">
                        <div className="ms-2 col-10">
                            <h6 className="fs-6 fw-bold my-0">
                                {props.title}
                            </h6>
                            <p className="fs-6 my-0">{props.name}</p>
                            <p className="text-small">{props.category}</p>
                            <span className="badge bg-light text-dark text-small fw-normal">{props.language}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
