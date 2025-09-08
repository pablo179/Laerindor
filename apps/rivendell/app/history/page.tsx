import './page.css';

export default function TestingFontPage() {
  return (
    <main>
      <h1>This is Laerindor's Project font!</h1>
      <p>
        This fonts will be used on real projects like Rivendell, and others.
      </p>
      <p>
        Let's try this as a large paragraph to see how it looks like. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </p>
      <input type="text" placeholder="texts" />
      <button>Button</button>
      <div className="card">
        <h2>Card Title</h2>
        <p>
          This is a card component. It is used to display content in a
          structured way.
        </p>
      </div>
      <div className="alert">
        <strong>Alert!</strong> This is an alert component. It is used to
        display important information to the user.
      </div>
      <div className="badge">Badge</div>
      <div className="tooltip" data-tooltip="This is a tooltip">
        Hover me
      </div>
    </main>
  );
}
