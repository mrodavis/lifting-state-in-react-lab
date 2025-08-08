// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, onRemove }) => {
  return (
    <ul>
      {[...stack].reverse().map((ingredient, index) => {
        const reverseIndex = stack.length - 1 - index;
        return (
          <li key={reverseIndex} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => onRemove(reverseIndex)}>X</button>
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerStack;
