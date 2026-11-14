/** What gets asked across a crowded counter, every day. */
const QUESTIONS = [
  "Phone number for the bill?",
  "Name on the order?",
  "Delivery address?",
  "Email for the invoice?",
];

export function CounterQuestions() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div>
          <h2 className="max-w-[16ch] text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everyone in the queue hears the answer.
          </h2>
          <p className="mt-5 max-w-[32rem] text-lg leading-relaxed text-muted">
            Supermarkets, pharmacies and restaurants ask for your details out loud, with a queue behind you. Once
            you’ve said your number, you can’t take it back.
          </p>
        </div>

        <ul className="flex flex-col gap-3 self-center" aria-label="Questions asked at the counter">
          {QUESTIONS.map((question, i) => (
            <li
              key={question}
              className="w-fit rounded-3xl rounded-bl-md bg-paper px-5 py-3.5 text-lg font-semibold ring-1 ring-line"
              style={{ marginLeft: `${i * 6}%` }}
            >
              {question}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
