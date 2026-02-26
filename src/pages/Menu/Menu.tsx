import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../../data/menu';
import { useState } from 'react';
import styles from './Menu.module.css';

export const Menu = () => {
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const toggleItem = (id: number, checked: boolean) => {
    const newSelected = new Set(selectedIds);
    checked ? newSelected.add(id) : newSelected.delete(id);
    setSelectedIds(newSelected);
  };

  const selectedItems = MENU_ITEMS.filter(item => selectedIds.has(item.id));
  const totalCount = selectedItems.length;
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const selectedNames = selectedItems.map(item => item.name).join(', ');

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>
        ← На главную
      </Link>

      <div className={styles.orderCard}>
        <h3 className={styles.orderTitle}>🛒 Ваш заказ</h3>
        <p>
          <strong>Позиции:</strong>{' '}
          <span className={!selectedNames ? styles.emptySelection : ''}>
            {selectedNames || 'Ничего не выбрано'}
          </span>
        </p>
        <p><strong>Количество:</strong> {totalCount}</p>
        <p><strong>Сумма:</strong> {totalPrice} ₽</p>
      </div>

      <h3 className={styles.menuTitle}>Меню:</h3>
      {MENU_ITEMS.map(item => (
        <div key={item.id} className={styles.menuItem}>
          <input
            type="checkbox"
            id={`item-${item.id}`}
            checked={selectedIds.has(item.id)}
            onChange={(e) => toggleItem(item.id, e.target.checked)}
            className={styles.checkbox}
          />
          <label htmlFor={`item-${item.id}`} className={styles.label}>
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.itemPrice}>{item.price} ₽</span>
          </label>
        </div>
      ))}
    </div>
  );
};