import { getItemsTotal } from '../add.js';

jest.mock('../api.js');

describe('checking the total number of meals', () => {
  document.body.innerHTML = `
  <ul class="navList">
  <li><a class="tags all-items" href="#index.php">Special flavours</a></li>
  </ul>`;

  test('displays the number of meals available', async () => {
    const item = document.querySelector('.all-items');
    const total = await getItemsTotal();
    item.append(document.createTextNode(` (${total})`));
    expect(total).toBe(5);
    expect(item.innerHTML).toEqual('Special flavours (5)');
  });
});
