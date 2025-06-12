import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // بارگذاری تسک‌ها از localStorage هنگام لود صفحه
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  // ذخیره تسک‌ها در localStorage هنگام تغییر
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // افزودن تسک جدید
  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: newTodo, completed: false }
    ]);
    setNewTodo('');
  };

  // تغییر وضعیت تسک (کامل شده/ناکامل)
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // حذف تسک
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-right">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">لیست وظایف</h1>
        
        {/* فرم افزودن تسک */}
        <form onSubmit={addTodo} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="وظیفه جدید را وارد کنید"
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-right"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
              اضافه کن
            </button>
          </div>
        </form>

        {/* لیست تسک‌ها */}
        <ul className="space-y-3">
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center">هیچ وظیفه‌ای وجود ندارد</p>
          ) : (
            todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="h-5 w-5 text-purple-600 rounded focus:ring-purple-600"
                  />
                  <span
                    className={`${
                      todo.completed ? 'line-through text-gray-500' : 'text-gray-700'
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  حذف
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;