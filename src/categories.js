import Image from "next/image";

export default function Categories(props) {

    return (
        <div className="card">
            <div className="card-img-top">
                <Image
                    priority
                    src={props.coverImg}
                    layout="responsive"
                    height={832}
                    width={624}
                    alt="user"
                />
            </div>
            <div className="card-body px-0">
                <div className="ms-2 col-9">
                    <p className="fw-bold mb-0">{props.title}</p>
                    <p className="fs-6 my-0">{props.name}</p>

                    <span className="badge bg-light text-dark text-small fw-normal">
                        {props.language}
                    </span>
                </div>
            </div>
        </div>
    );
}
