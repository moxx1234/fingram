import { NavLink, Outlet } from "react-router-dom"

const UserLayout = () => {
	return (
		<div className="user">
			<div className="user__container">
				<nav className="user__navigation">
					<NavLink to="/user" end>
						Пользователь
					</NavLink>
					<NavLink to="/user/accounts">Счета</NavLink>
					<NavLink to="/user/categories">Категории</NavLink>
				</nav>
				<Outlet />
			</div>
		</div>
	)
}

export default UserLayout
