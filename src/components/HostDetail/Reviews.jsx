import { Link } from "react-router-dom";
import ReviewChart from "../Chart/ReviewChart";

const reviews = [
  {
    id: 1,
    writer: "Elliot",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio atque ea dolores est sit saepe impedit natus fugiat laborum perferendis.",
    date: new Date(2022, 11, 21).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    starsCount: 5,
  },
  {
    id: 2,
    writer: "Sandy",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio atque ea dolores est sit saepe impedit natus fugiat laborum perferendis dasdasd jhuytruu dsaddfpop ujdknvmcbvm.",
    date: new Date(2021, 10, 10).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    starsCount: 5,
  },
];

const Reviews = () => {
  return (
    <div className="w-full p-4">
      <div className="w-full flex items-center gap-5">
        <p className="text-2xl font-bold text-slate-200"> Your reviews</p>
        <Link className="text-lg text-slate-300">
          Last <span className="underline underline-offset-2">30 days</span>
        </Link>
      </div>
      <ReviewChart />
      <div className="w-full mt-5">
        <h1 className="text-xl font-semibold text-slate-200">
          Reviews <span className="text-lg">({reviews.length})</span>
        </h1>
        <div className="w-full flex flex-col gap-6 mt-5">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-full border-b border-slate-600 pb-4"
            >
              <p className="">{review.starsCount === 5 && "⭐⭐⭐⭐⭐"}</p>
              <p className="flex items-center gap-2">
                <span className="text-xl font-semibold text-slate-200">
                  {review.writer}
                </span>
                <span className="text-sm text-slate-500">{review.date}</span>
              </p>
              <p className="text-slate-300">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
